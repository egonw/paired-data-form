/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This person will be the point of contact for any communication related to this entry.
 */
export type NameOfContactForCorrespondence = string;
/**
 * ORCID identifier of person who is point of contact. Please use full ORCID iD, e.g. https://orcid.org/0000-0002-1825-0097 .
 */
export type ORCIDIdentifier = string;
export type SubmitterContactEMailAddress = string;
/**
 * This person is contacted in case the submitter has moved institution
 */
export type NameOfThePrincipalInvestigatorOfTheSubmitter = string;
/**
 * Please use the full, official name of your institute in English. E.g., 'Harvard University'.
 */
export type AcademicInstitutionOrCompanyName = string;
export type PIContactEMailAddress = string;
/**
 * Please provide the GNPS-MassIVE identifier of your metabolomics data set, e.g., MSV000078839.
 */
export type GNPSMassIVEIdentifier = string;
/**
 * Please provide the link to the MassIVE upload, e.g., https://gnps.ucsd.edu/ProteoSAFe/result.jsp?task=a507232a787243a5afd69a6c6fa1e508&view=advanced_view.
 */
export type LinkToMassIVEUpload = string;
/**
 * If you have run a Molecular Network on GNPS, please provide the task ID of the Molecular Network job. It can be found in the URL of the Molecular Networking job, e.g., in https://gnps.ucsd.edu/ProteoSAFe/status.jsp?task=c36f90ba29fe44c18e96db802de0c6b9 the task ID is c36f90ba29fe44c18e96db802de0c6b9.
 */
export type MolecularNetworkTaskID = string;
/**
 * Please provide the MetaboLights study identifier of your metabolomics data set, e.g. MTBLS307.
 */
export type MetaboLightsStudyIdentifier = string;
/**
 * Add other associated GNPS-MassIVE identifiers here, eg. MSV000078836,MSV000078839. For example, if you have data spread out over multiple MASSIVE datasets, reported in the same publication, you can add those related IDs here. If you used the same assays ("Sample Preparation," "Extraction Methods," and/or "Instrumentation Methods"), you can clone one project and make slight modifications (e.g. different Genome IDs) instead of entering the assay information again.
 */
export type RelatedGNPSMassiveIdentifiers = string;
/**
 * Add other associated MetaboLights study identifiers here, eg. MTBLS727,MTBLS728. Similar to the related GNPS-Massive identifiers.
 */
export type RelatedMetabolightsStudyIdentifiers = string;
/**
 * Publications describing the metabolomics experiment and samples. Please input PubMed IDs (PMIDs, not PMCIDs!), separated by commas: e.g., '12000953,8843436'. Only enter numeric characters and commas. If a PMID is not available, a DOI can be entered instead (without the designation 'DOI' itself, e.g. '10.1039/c4sc01927j')
 */
export type KeyPublications = string;
export type GenomeType = 'genome' | 'metagenome' | 'metagenome-assembled genome';
/**
 * If publicly available metadata is available at BioSamples, please provide the BioSample accession number, e.g. SAMEA3648350, here. We encourage depositing metadata following a standardized ontology to enable proper reuse of the data.
 */
export type BioSampleAccessionNumber = string;
/**
 * Publications describing the sequencing of the genome or metagenome. Please input PubMed IDs (PMIDs, not PMCIDs!), separated by commas: e.g., '12000953,8843436'. Only enter numeric characters and commas. If a PMID is not available, a DOI can be entered instead (without the designation 'DOI' itself, e.g. '10.1039/c4sc01927j')
 */
export type KeyPublications1 = string;
/**
 * Please assign a unique Genome Label for this genome or metagenome to help you recall it during the linking step.
 */
export type GenomeLabel = string;
/**
 * Please add all genomes and/or metagenomes for which paired data is available as separate entries.
 */
export type AllMetagenomeGenomes = {
  genome_ID: GenomeOrMetagenome;
  BioSample_accession?: BioSampleAccessionNumber;
  publications?: KeyPublications1;
  genome_label: GenomeLabel;
  [k: string]: any;
}[];
/**
 * Please select liquid or solid medium.
 */
export type MediumType = 'liquid' | 'solid' | 'metagenome';
/**
 * Please enter the temperature of growth in degrees Celsius.
 */
export type Temperature = number;
/**
 * Please enter the growth duration in hours.
 */
export type DurationH = number;
/**
 * Please enter the growth phase or optical density (OD) if you know it.
 */
export type PhaseOrOD = string;
/**
 * Please select aeration type.
 */
export type Type = 'shaking' | 'fermenter' | 'not shaking';
/**
 * Please describe any other relevant or distinguishing growth conditions e.g. light 12h, dark 12h.  You can also define custom media here, indicate if purity checks were made, and provide more specific details.
 */
export type OtherGrowthConditions = string;
/**
 * Please assign a Sample Growth Conditions Label for this set of sample preparation details. If more than one sample growth conditions was used, please create a new Sample Growth Conditions Label for each condition by clicking on the plus.
 */
export type SampleGrowthConditionsLabel = string;
/**
 * For strains grown in culture, please fill in the first five sections. For metagenomic samples, only metagenomic source is necessary.
 */
export type SampleGrowthConditions = {
  medium_details: MediumDetails;
  growth_parameters: GrowthParameters;
  aeration: Aeration;
  other_growth_conditions?: OtherGrowthConditions;
  sample_preparation_method: SampleGrowthConditionsLabel;
  [k: string]: any;
}[];
export type Solvent =
  | Methanol
  | MethyleneChlorideDichloromethane
  | EthylAcetate
  | Chloroform
  | Acetone
  | Isopropanol
  | Butanol
  | Acetonitrile
  | Ethanol
  | DiethylEther
  | Hexane
  | Water
  | OtherSolvent;
export type Methanol = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17790';
export type MethyleneChlorideDichloromethane = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15767';
export type EthylAcetate = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:27750';
export type Chloroform = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:35255';
export type Acetone = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15347';
export type Isopropanol = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17824';
export type Butanol = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:28885';
export type Acetonitrile = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:38472';
export type Ethanol = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16236';
export type DiethylEther = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:35702';
export type Hexane = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:29021';
export type Water = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15377';
export type OtherSolvent = 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:46787';
/**
 * When a mixture of solvents was used, specify in which ratio each solvent was used. The ratios should sum up to 1.
 */
export type Ratio = number;
/**
 * Please select the organic solvent used to extract the sample. If your sovent is not listed, please select Other and specify the solvent. If you used multiple solvents, please select them all and indicate the ratio.
 */
export type ExtractionSolvent = {
  solvent: Solvent;
  ratio: Ratio;
  [k: string]: any;
}[];
export type ExtractedMaterial = Cells | Supernatant | CellsSupernatant | ComplexMixtureMetagenome;
export type Cells = 'cells';
export type Supernatant = 'supernatant';
export type CellsSupernatant = 'cells_supernatant';
export type ComplexMixtureMetagenome = 'complex';
/**
 * Please describe any other relevant extraction methods, e.g. partitioned against water, fractionated with 20% acetonitrile, sequential extractions, used resins or storage manner (dried, liquid).
 */
export type OtherExtractionDetails = string;
/**
 * Please assign an Extraction Method Label for this set of extraction details. If more than one extraction method was used, please create a new Extraction Method Label for each method by clicking on the plus.
 */
export type ExtractionMethodLabel = string;
/**
 * Please provide basic details about the extraction solvents and procedures used.
 */
export type ExtractionMethods = {
  solvents?: ExtractionSolvent;
  extracted_material?: ExtractedMaterial;
  other_extraction_parameters?: OtherExtractionDetails;
  extraction_method: ExtractionMethodLabel;
  [k: string]: any;
}[];
/**
 * Please select the type of LCMS instrument used. If your instrument type is not listed here, please select Other and specify.
 */
export type InstrumentType =
  | Quadrupole
  | TimeOfFlightTOF
  | IonTrapIT
  | QuadrupolIT
  | OrbitrapQExactiveLTQOrbitrapEtc
  | FourierTransformIonCyclotronResonanceFTICR
  | MagneticSector
  | ElectrostaticEnergyAnalyzer
  | StoredWaveformInverseFourierTransform
  | Cyclotron
  | OtherMassSpectrometer;
export type Quadrupole = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000081';
export type TimeOfFlightTOF = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000084';
export type IonTrapIT = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000264';
export type QuadrupolIT = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000082';
export type OrbitrapQExactiveLTQOrbitrapEtc = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000484';
export type FourierTransformIonCyclotronResonanceFTICR = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000079';
export type MagneticSector = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000080';
export type ElectrostaticEnergyAnalyzer = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000254';
export type StoredWaveformInverseFourierTransform = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000284';
export type Cyclotron = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000288';
export type OtherMassSpectrometer = 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000443';
/**
 * Please select column phase. You can add additional column details in the Other Instrumentation Information section below.
 */
export type ColumnPhase = 'Reverse Phase' | 'Normal Phase' | 'HILIC';
/**
 * Please select ionization mode.
 */
export type IonizationMode = Positive | Negative | Both;
export type Positive = 'http://purl.obolibrary.org/obo/MS_1000130';
export type Negative = 'http://purl.obolibrary.org/obo/MS_1000129';
export type Both = 'http://purl.obolibrary.org/obo/CHMO_0002262';
/**
 * Please select the type of ionization used. If your ionization type is not listed here, please select Other and specify.
 */
export type IonizationType =
  | ElectrosprayIonizationESI
  | MatrixAssistedLaserDesorptionIonizationMALDI
  | AtmosphericPressureChemicalIonizationAPCI
  | OtherIonizationType;
export type ElectrosprayIonizationESI = 'http://purl.obolibrary.org/obo/MS_1000073';
export type MatrixAssistedLaserDesorptionIonizationMALDI = 'http://purl.obolibrary.org/obo/MS_1000075';
export type AtmosphericPressureChemicalIonizationAPCI = 'http://purl.obolibrary.org/obo/MS_1000070';
export type OtherIonizationType = 'http://purl.obolibrary.org/obo/MS_1000008';
/**
 * Please enter the mass range collected in Da. For example `100-800` for a range from 100 Da to 800 Da
 */
export type MassRange = string;
/**
 * Please enter the collision energy.
 */
export type CollisionEnergy = string;
/**
 * Did you add anything to your mobile phase, e.g. 0.1% formic acid.
 */
export type MobilePhaseConditions = string;
/**
 * Please enter any other relevant instrument or method details, such as gradient used, more column details, or any other relevant information.
 */
export type OtherInstrumentationInformation = string;
/**
 * Please assign an Instrumentation Method Label for this set of instrumentation details. If more than one LCMS instrumentation method was used, please create a new Instrumentation Method Label for each condition by clicking on the plus.
 */
export type InstrumentationMethodLabel = string;
/**
 * Please provide basic information on the type of LCMS instrumentation and protocols used in this experiment. More detailed information can go in the 'Other' box.
 */
export type InstrumentationMethods = {
  instrumentation?: Instrumentation;
  column?: ColumnPhase;
  mode?: IonizationMode;
  ionization?: Ionization;
  range?: MassRange;
  collision_energy?: CollisionEnergy;
  buffering?: MobilePhaseConditions;
  other_instrumentation?: OtherInstrumentationInformation;
  instrumentation_method: InstrumentationMethodLabel;
  [k: string]: any;
}[];
/**
 * Please select the Genome Label to be linked to a metabolomics data file.
 */
export type GenomeMetagenome = string;
/**
 * Please provide a direct link to the metabolomics data file location, e.g. ftp://massive.ucsd.edu/MSV000078839/spectrum/R5/CNB091_R5_M.mzXML found in the FTP download of a MassIVE dataset or https://www.ebi.ac.uk/metabolights/MTBLS307/files/Urine_44_fullscan1_pos.mzXML found in the Files section of a MetaboLights study.
 */
export type LocationOfMetabolomicsDataFile = string;
/**
 * Please select the Sample Growth Conditions Label for this linked dataset.
 */
export type SampleGrowthConditions1 = string;
/**
 * Please select the Extraction Method Label for this linked dataset
 */
export type ExtractionMethod = string;
/**
 * Please select the Instrumentation Method Label for this linked dataset
 */
export type InstrumentationMethod = string;
/**
 * Create a linked pair by selecting the Genome Label as provided earlier and subsequently sample names of and links to the metabolomics data file belonging to that genome with appropriate experimental methods.
 */
export type LinksBetweenGenomesAndMetabolomicsData = {
  genome_label: GenomeMetagenome;
  metabolomics_file: LocationOfMetabolomicsDataFile;
  sample_preparation_label: SampleGrowthConditions1;
  extraction_method_label: ExtractionMethod;
  instrumentation_method_label: InstrumentationMethod;
}[];
/**
 * Please provide a brief description of the known linked molecule(s) and gene cluster(s), including the name of the molecule(s).
 */
export type KnownLinkedGeneClusterAndMolecule = string;
/**
 * Please indicate if verification of the link between BGC and MS2 is experimentally validated or bioinformatically inferred.
 */
export type LinkVerification = (
  | 'Experimentally validated with knockouts, heterologous expression, or other gene cluster manipulation'
  | 'Bioinformatically inferred through comparative analysis with another experimentally defined gene cluster'
  | 'Experimentally validated with NMR and/or detailed MS/MS analysis'
  | 'Evidence as indicated in MIBiG')[];
/**
 * Please provide the SMILES notation for the known molecule.
 */
export type SimplifiedMolecularInputLineEntrySystemSMILES = string;
/**
 * Please provide the IUPAC name for the known molecule,
 */
export type InternationalUnionOfPureAndAppliedChemistryIUPACName = string;
export type WhatWouldYouLikeToLink = 'GNPS molecular family' | 'single molecule';
/**
 * If you already know of a gene cluster or gene cluster family that can be linked to a molecule or molecular family, please provide details in this section
 */
export type LinkedGeneClustersAndMS2Spectra = {
  known_link?: KnownLinkedGeneClusterAndMolecule;
  verification: LinkVerification;
  SMILES?: SimplifiedMolecularInputLineEntrySystemSMILES;
  IUPAC?: InternationalUnionOfPureAndAppliedChemistryIUPACName;
  BGC_ID: MIBiGBGCID;
  link?: WhatWouldYouLikeToLink;
  [k: string]: any;
}[];

/**
 * This Paired Data Platform is a community-based initiative standardizing links between genomic and metabolomics data in a computer-readable manner to further the field of natural products discovery. The form below aims to capture sufficient metadata to create informative links between genome sequences on the one hand and metabolomics profiles on the other hand. Note that wherever we could, we have used existing ontology to define terms. When filling out the form below, at any time the inputted data can be saved and downloaded in json format to be reloaded when continuing with the entries. The form below first asks for some personal information to provide proper credits and allow the community to ask the right person information on the linked data. Then, overall information on the metabolomics experiment is captured, before all genomes or metagenomes can be detailed, including creating a unique genome label for easy recall during linking. Then the metabolomics metadata can be saved using labels for sample growth conditions, extraction, and instrument methods. Finally, the data links can be made with references to the actual mass spectral files in MaSSIVE. Optionally, you can save links between known biosynthesis gene clusters and mass spectra or molecular families in the second part of the form. After saving your entries, a table below the form will appear filled with the links you created with experimental labels; you can also expand the table to see all information inputted. Then you can download the filled json schema in which all links are recorded. To accommodate inputting large datasets, you can download the TSV linking table, manually add new links, and re-upload the TSV file. It is important to note that all experimental labels need to be defined in the form and at least one link made before you download and edit the table. We hope you will use our platform to capture your paired data links as this will allow you and the community to efficiently use your data in follow-up studies that rely on the combined use of genome and metabolome data.
 */
export interface IOMEGAPairedDataPlatform {
  version: string;
  personal: SubmitterInformation;
  metabolomics: OverallMetabolomicsProjectDetails;
  genomes: AllMetagenomeGenomes;
  experimental: MetabolomicsExperimentalDetails;
  genome_metabolome_links: LinksBetweenGenomesAndMetabolomicsData;
  BGC_MS2_links?: LinkedGeneClustersAndMS2Spectra;
}
export interface SubmitterInformation {
  submitter_name?: NameOfContactForCorrespondence;
  submitter_orcid?: ORCIDIdentifier;
  submitter_email?: SubmitterContactEMailAddress;
  PI_name?: NameOfThePrincipalInvestigatorOfTheSubmitter;
  PI_institution?: AcademicInstitutionOrCompanyName;
  PI_email?: PIContactEMailAddress;
}
/**
 * Please provide basic information on the publicly available metabolomics project from which paired data is available. Currently, we allow for links to mass spectrometry data deposited in GNPS-MaSSIVE or MetaboLights.
 */
export interface OverallMetabolomicsProjectDetails {
  project: GNPSMassIVE | MetaboLights;
  related_GNPSMassIVE_ID?: RelatedGNPSMassiveIdentifiers;
  related_metabolights_study_id?: RelatedMetabolightsStudyIdentifiers;
  publications?: KeyPublications;
}
export interface GNPSMassIVE {
  GNPSMassIVE_ID: GNPSMassIVEIdentifier;
  MaSSIVE_URL: LinkToMassIVEUpload;
  molecular_network?: MolecularNetworkTaskID;
  [k: string]: any;
}
export interface MetaboLights {
  metabolights_study_id: MetaboLightsStudyIdentifier;
  [k: string]: any;
}
/**
 * Please select genome (microbial isolate grown in pure culture), metagenome (microbial mixture or environmental sample), or metagenome-assembled genome (genome assembled from a metagenome with no isolate grown in culture). All genome sequences must first be submitted to a public database with a unique identifier. In the case of a whole genome sequence, please use master records. At least one identifier must be entered.
 */
export interface GenomeOrMetagenome {
  genome_type: GenomeType;
  [k: string]: any;
}
/**
 * Please provide basic information about the Sample Preparation, Extraction Methods, and Instrumentation Methods used. If different Sample Preparation, Extraction Methods, and/or Instrumentation Methods were used leading to different metabolomics data, please use separate entries for each experimental change and create a label that will help you recall the experimental parameters during the linking step.
 */
export interface MetabolomicsExperimentalDetails {
  sample_preparation?: SampleGrowthConditions;
  extraction_methods?: ExtractionMethods;
  instrumentation_methods?: InstrumentationMethods;
}
export interface MediumDetails {
  medium_type?: MediumType;
  [k: string]: any;
}
export interface GrowthParameters {
  growth_temperature?: Temperature;
  growth_duration?: DurationH;
  growth_phase_OD?: PhaseOrOD;
}
export interface Aeration {
  aeration_type?: Type;
  [k: string]: any;
}
export interface Instrumentation {
  instrument?: InstrumentType;
  [k: string]: any;
}
export interface Ionization {
  ionization_type?: IonizationType;
  [k: string]: any;
}
export interface MIBiGBGCID {
  BGC?: 'MIBiG number associated with this exact BGC' | 'MIBiG number of a similar BGC from a closely related strain';
  [k: string]: any;
}
