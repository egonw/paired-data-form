import * as React from "react";

import { JSONSchema6 } from "json-schema";
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap';
import Form, { ISubmitEvent } from "react-jsonschema-form";
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField";


import "./App.css";

interface IState {
  schema: JSONSchema6;
  uiSchema: any;
  formData: object;
}

const formFields = {
  collapsible: CollapsibleField
};

class App extends React.Component<{}, IState> {
  public state: IState = { schema: {}, uiSchema: {}, formData: {} };

  public componentDidMount() {
    fetch("schema.json")
      .then(r => r.json())
      .then(schema => this.setState({ schema }));
    fetch("uischema.json")
      .then(r => r.json())
      .then(uiSchema => {
        this.setState({ uiSchema });
      });
  }

  public onSubmit = ({ formData }: ISubmitEvent<object>) => {
    this.setState({ formData });
  }

  public render() {
    return (
      <div className="App">
        {Object.keys(this.state.schema).length > 0 && Object.keys(this.state.uiSchema).length > 0 && (
          <Form
            schema={this.state.schema}
            uiSchema={this.state.uiSchema}
            fields={formFields}
            formData={this.state.formData}
            onSubmit={this.onSubmit}
            liveValidate={true}
          >
            <ButtonGroup>
              <Button><Glyphicon glyph="upload" /> Upload</Button>
              <Button><Glyphicon glyph="download" /> Download</Button>
              <Button type="submit" bsStyle="primary"><Glyphicon glyph="ok" /> Save</Button>
              <Button type="reset"><Glyphicon glyph="remove" /> Reset</Button>
            </ButtonGroup>
          </Form>
        )
        }
        {Object.keys(this.state.formData).length > 0 &&
          <div>
            <h3>iOMEGA Paired data record:</h3>
            <textarea cols={120} rows={10} disabled={true} value={JSON.stringify(this.state.formData, null, 4)} />
          </div>
        }
      </div>
    );
  }
}

export default App;
