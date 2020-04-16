import * as React from "react";

import { Glyphicon, FormControl, Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

export type FilterKey = 'principal_investigator'
    | 'submitter' | 'genome_type' | 'species'
    | 'metagenomic_environment' | 'instrument_type'
    | 'growth_medium' | 'solvent';

interface Props {
    query?: string;
    filter?: {
        key: FilterKey;
        value: string;
    }
    submitSearch(query: string): void;
    clearSearch(): void;
    clearFilter(): void;
}

export const ProjectSearch = (props: Props) => {
    const [query, setQuery] = useState<string>(props.query ? props.query : '');

    function submitSearch(e: React.FormEvent<Form>) {
        e.preventDefault();
        props.submitSearch(query);
    }

    function clearSearch() {
        setQuery('');
        if (props.query) {
            props.clearSearch();
        }
    }

    return (
        <Form onSubmit={submitSearch}>
            <InputGroup>
                <FormControl
                    type="text"
                    value={query}
                    placeholder="Search ..."
                    onChange={(e: any) => setQuery(e.target.value)}
                />
                {query && (
                    <InputGroup.Button>
                        <Button title="Clear" type="reset" onClick={clearSearch}>
                            <Glyphicon glyph="remove" />
                        </Button>
                    </InputGroup.Button>
                )}
                <InputGroup.Button>
                    <Button title="Search" type="submit">
                        <Glyphicon glyph="search" />
                    </Button>
                </InputGroup.Button>
            </InputGroup>
            {props.filter && (
                <div>
                    <span>Filtered on {props.filter.key.replace('_', ' ')}: {props.filter.value}</span>
                    <Button bsStyle="link" bsSize="small" title="Clear filter" onClick={props.clearFilter}>
                        <Glyphicon glyph="remove" />
                    </Button>
                </div>
            )}
        </Form>
    );
}