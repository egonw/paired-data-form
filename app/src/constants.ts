import { DataCatalog } from "schema-dts";

export const doi = '10.5281/zenodo.3736430';
export const doiLink = 'https://doi.org/' + doi;

export const jsonldDataCatalog: DataCatalog = {
  "@type": "DataCatalog",
  name: "Paired Omics Data Platform",
  about: 'Linking mas spectra and genomic information to discover new chemistry',
  url: 'https://pairedomicsdata.bioinformatics.nl',
  identifier: doiLink
};
