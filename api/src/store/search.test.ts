import { loadJSONDocument } from '../util/io';
import { EXAMPLE_PROJECT_JSON_FN } from '../testhelpers';
import { SearchEngine, FilterField } from './search';
import { Client } from '@elastic/elasticsearch';
jest.mock('@elastic/elasticsearch');

const MockedClient: jest.Mock = Client as any;

describe('new SearchEngine()', () => {
    let searchEngine: SearchEngine;
    let client: any;

    beforeAll(() => {
        client = {
            index: jest.fn(),
            search: jest.fn(),
            delete: jest.fn(),
        };
        MockedClient.mockImplementation(() => client);
        searchEngine = new SearchEngine('http://localhost:9200');
    });

    describe('with a single genome project', () => {
        beforeAll(async () => {
            const project = await loadJSONDocument(EXAMPLE_PROJECT_JSON_FN);
            await searchEngine.add({
                _id: 'projectid1',
                project,
                enrichments: {
                    genomes: {
                        'Streptomyces sp. CNB091': {
                            'species': {
                                'scientific_name': 'Streptomyces sp. CNB091',
                                'tax_id': 1169156
                              },
                              'title': 'Streptomyces sp. CNB091, whole genome shotgun sequencing project',
                              'url': 'https://www.ncbi.nlm.nih.gov/nuccore/ARJI01000000'
                        }
                    }
                }
            });
        });

        it('should have called client.index', () => {
            expect(client.index).toHaveBeenCalledWith({
                index: 'podp',
                body: expect.anything()
            });
        });

        describe('the added document', () => {
            let doc: any;

            beforeAll(() => {
                doc = client.index.mock.calls[0][0].body;
            });

            it('should have medium_title', () => {
                const titles = doc.project.experimental.sample_preparation.map(
                    (d: any) => d.medium_details.medium_title
                );
                const expected_titles = ['A1 medium', 'R5 medium', 'Mannitol soy flour medium (MS)'];
                expect(titles).toEqual(expected_titles);
            });

            it('should have instrument_title', () => {
                const titles = doc.project.experimental.instrumentation_methods.map(
                    (d: any) => d.instrumentation.instrument_title
                );
                const expected_titles = ['Time-of-flight (TOF)'];
                expect(titles).toEqual(expected_titles);
            });

            it('should have solvent_title', () => {
                const titles: string[] = [];
                doc.project.experimental.extraction_methods.forEach(
                    (m: any) => m.solvents.forEach(
                        (d: any) => titles.push(d.solvent_title)
                    )
                );
                const expected_titles = ['Ethyl acetate', 'Butanol', 'Methanol'];
                expect(titles).toEqual(expected_titles);
            });

      });

        describe('search(\'Justin\')', () => {
            const query = 'Justin';
            let hits: any;

            beforeAll(async () => {
                const project = await loadJSONDocument(EXAMPLE_PROJECT_JSON_FN);
                client.search.mockReturnValue({
                    body: {
                        hits: {
                            hits: [{
                                _id: 'projectid1',
                                _score: 0.5,
                                _source: {
                                    _id: 'projectid1',
                                    project
                                }
                            }]
                        }
                    }
                });
                hits = await searchEngine.search(query);
            });

            it('should have called client.search', () => {
                expect(client.search).toHaveBeenCalledWith({
                    index: 'podp',
                    body: {
                        'query': {
                            simple_query_string: {
                                query
                            }
                        }
                    }
                });
            });

            it('should return hits', async () => {
                const project = await loadJSONDocument(EXAMPLE_PROJECT_JSON_FN);
                expect(hits).toEqual([{
                    _id: 'projectid1',
                    project
                }]);
            });
        });

        describe('delete(\projectid1\')', () => {
            it('should have called client.delete', async () => {
                await searchEngine.delete('projectid1');

                expect(client.delete).toHaveBeenCalledWith({
                    id: 'projectid1',
                    index: 'podp',
                });
            });
        });

        describe.each([
            ['principal_investigator', 'Marnix Medema'],
            ['submitter', 'Justin van der Hooft'],
            ['genome_type', 'genome'],
            ['species', 'Streptomyces sp. CNB091'],
            ['metagenomic_environment', 'Soil'],
            ['instrument_type', 'Time-of-flight (TOF)'],
            ['growth_medium', 'A1 medium'],
            ['solvent', 'Butanol'],
        ])('filter(\'%s\', \'%s\')', (key: FilterField, value) => {
            let hits: any;
            beforeAll(async () => {
                const project = await loadJSONDocument(EXAMPLE_PROJECT_JSON_FN);
                client.search.mockReturnValue({
                    body: {
                        hits: {
                            hits: [{
                                _id: 'projectid1',
                                _score: 0.5,
                                _source: {
                                    _id: 'projectid1',
                                    project
                                }
                            }]
                        }
                    }
                });
                hits = await searchEngine.filter(key, value);
            });

            it('should have called index.search', () => {
                expect(client.search).toBeCalled();
                // TODO assert arguments
            });

            it('should return hits', async () => {
                const project = await loadJSONDocument(EXAMPLE_PROJECT_JSON_FN);
                expect(hits).toEqual([{
                    _id: 'projectid1',
                    project
                }]);
            });
        });
    });

    describe('with a single metagenome project', () => {
        beforeAll(async () => {
            const project = await loadJSONDocument(EXAMPLE_PROJECT_JSON_FN);
            project.experimental.sample_preparation = [{
                'medium_details': {
                    'medium_type': 'metagenome',
                    'metagenomic_environment': 'https://bioportal.bioontology.org/ontologies/MEO/?p=classes&conceptid=http%3A%2F%2Fpurl.jp%2Fbio%2F11%2Fmeo%2FMEO_0000393',
                    'metagenomic_sample_description': 'American gut subject'
                },
                'growth_parameters': {
                    'growth_phase_OD': 'NA'
                },
                'aeration': {
                    'aeration_type': 'not shaking'
                },
                'sample_preparation_method': 'Metagenome'
            }];
            client.index.mockClear();
            await searchEngine.add({
                _id: 'projectid1',
                project,
            });
        });

        describe('the added document', () => {
            let doc: any;

            beforeAll(() => {
                doc = client.index.mock.calls[0][0].body;
            });

            it('should have metagenomic_environment_title', async () => {
            const titles = doc.project.experimental.sample_preparation.map(
                (d: any) => d.medium_details.metagenomic_environment_title
            );
            const expected_titles = ['Human'];
            expect(titles).toEqual(expected_titles);
        });
    });
    });
});