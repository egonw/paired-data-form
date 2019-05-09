import * as React from "react";
import { Table } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";

import { Decide } from "../Decide";
import { AuthContext } from "../auth";
import { ProjectSummary, summarizeProject } from "../summarize";
import { deny, approve } from "../review";

const usePendingProjects = (): [ProjectSummary[], React.Dispatch<React.SetStateAction<ProjectSummary[]>>] => {
    const {token} = useContext(AuthContext);
    const headers = new Headers({
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
    });
    const init = {headers};
    const url = '/api/pending/projects';
    const [data, setData] = useState<ProjectSummary[]>([]);
    async function fetchData() {
        const response = await fetch(url, init);
        const json = await response.json();
        const project_summaries = json.entries.map(summarizeProject);
        setData(project_summaries);
    }
    useEffect(() => { fetchData(); }, [url]);
    return [data, setData];
};

function dropProject(id: string, list: ProjectSummary[]) {
    const updated = [...list];
    const index = updated.findIndex(p => p._id === id);
    updated.splice(index, 1);
    return updated;
}

export function PendingProjects() {
    const [pending_projects, setPendingProjects] = usePendingProjects();
    const {token} = useContext(AuthContext);
    const onDeny = (project_id: string) => async () => {
        await deny(project_id, token);
        setPendingProjects(dropProject(project_id, pending_projects));
    };
    const onApprove = (project_id: string) => async () => {
        await approve(project_id, token);
        setPendingProjects(dropProject(project_id, pending_projects));
    };
    const rows = pending_projects.map(d => (
        <tr key={d._id}>
            <td>
                <Decide onDeny={onDeny(d._id)} onApprove={onApprove(d._id)}/>
            </td>
            <td><Link to={`/pending/${d._id}`}>{d.GNPSMassIVE_ID}</Link></td>
            <td>{d.PI_name}</td>
            <td>{d.nr_genomes}</td>
            <td>{d.nr_growth_conditions}</td>
            <td>{d.nr_extraction_methods}</td>
            <td>{d.nr_instrumentation_methods}</td>
            <td>{d.nr_genome_metabolmics_links}</td>
            <td>{d.nr_genecluster_mspectra_links}</td>
        </tr>
    ));
    return (
        <div>
            <h1>List page of pending datasets that require approval</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Approve/Deny</th>
                        <th>GNPS Massive identifier</th>
                        <th>Principal investigator</th>
                        <th>Nr of (meta)genomes</th>
                        <th>Nr of growth conditions</th>
                        <th>Nr of extraction methods</th>
                        <th>Nr of instrumention methods</th>
                        <th>Nr of links between genomes and metabolomics</th>
                        <th>Nr of links between gene clusters and MS2 spectra</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    );
}