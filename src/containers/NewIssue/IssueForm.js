import React from "react";
import { uuid } from "uuidv4";
import { Formik, Field, Form } from "formik";

export default class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issueDescription: "",
      severity: "Major",
      selectedOption: "Open",
    };
    this.handledescriptionChange = this.handledescriptionChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handledescriptionChange(changeEvent) {
    this.setState({
      issueDescription: changeEvent.target.value,
    });
  }
  handleSelectChange(changeEvent) {
    this.setState({
      severity: changeEvent.target.value,
    });
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let issue = {};
    issue.id = uuid();
    issue.issueDescription = this.state.issueDescription;
    issue.severity = this.state.severity;
    issue.status = this.state.selectedOption;
    this.props.onSave(issue);
  }

  render() {
    return (
      <form style={{ margin: "20px" }} onSubmit={this.onSubmit}>
        <h1>Add an Issue</h1>
        <label>
          Description:&nbsp;
          <input
            type="text"
            onChange={this.handledescriptionChange}
            style={{ width: "500px" }}
          />
        </label>
        <br />
        <br />
        <label>
          Severity: &nbsp;
          <select onChange={this.handleSelectChange}>
            <option>Major</option>
            <option>Minor</option>
            <option>Critical</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Status: &nbsp;
          <label>
            <input
              type="radio"
              value="Open"
              checked={this.state.selectedOption === "Open"}
              onChange={this.handleOptionChange}
            />
            Open
          </label>
          <label>
            <input
              type="radio"
              value="In Progress"
              checked={this.state.selectedOption === "In Progress"}
              onChange={this.handleOptionChange}
            />
            In Progerss
          </label>
          <label>
            <input
              type="radio"
              value="Closed"
              checked={this.state.selectedOption === "Closed"}
              onChange={this.handleOptionChange}
            />
            Closed
          </label>
        </label>
        <br />
        <input type="submit" value="Save" />
      </form>
    );
  }
}
