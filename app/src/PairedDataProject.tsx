import * as React from "react";

import { Panel } from "react-bootstrap";

import { GeneSpectraTable } from "./GeneSpectraTable";
import { GenomeMetabolomicsTable } from "./GenomeMetabolomicsTable";
import { EnrichedProjectDocument } from "./summarize";
import { MetabolomicsProjectDetails } from "./MetabolomicsProjectDetails";
import { SubmitterInformation } from "./SubmitterInformation";
import { ProjectActions } from "./ProjectActions";

interface IProps {
  project: EnrichedProjectDocument;
  schema: any;
}

function record2dataUrl(data: object, mimeType = "application/json") {
  const bj = btoa(JSON.stringify(data, null, 4));
  return `data:${mimeType};base64,${bj}`;
}

export const PairedDataProject = ({ project, schema }: IProps) => {
  const project_id = project._id;
  const pure_project = project.project;
  const data_url = record2dataUrl({ id: project_id, ...pure_project });
  const filename = `paired_datarecord_${project_id}.json`;
  return (
    <div>
      <h3>iOMEGA Paired data project</h3>

      <div>Project identifier: {project_id}</div>
      <ProjectActions project_id={project_id} data_url={data_url} filename={filename} />

      <Panel>
        <Panel.Heading>Submitter Information</Panel.Heading>
        <Panel.Body><SubmitterInformation project_id={project._id} personal={pure_project.personal} /></Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>Metabolomics project details</Panel.Heading>
        <Panel.Body><MetabolomicsProjectDetails data={pure_project.metabolomics} /></Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>Links between genomes and metabolomics data</Panel.Heading>
        <Panel.Body><GenomeMetabolomicsTable data={project} schema={schema} /></Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>Linked gene clusters and MS2 spectra</Panel.Heading>
        <Panel.Body style={{ overflowY: 'auto' }}><GeneSpectraTable data={project} schema={schema} /></Panel.Body>
      </Panel>
      <ProjectActions project_id={project_id} data_url={data_url} filename={filename} />
    </div>
  );
};
