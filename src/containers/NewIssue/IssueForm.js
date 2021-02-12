import React from "react";
import { uuid } from "uuidv4";

export default class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issueDescription: "",
      severity: "Major",
      selectedOption: "Open",
      descriptionError: false,
    };
    this.handledescriptionChange = this.handledescriptionChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handledescriptionChange(changeEvent) {
    this.setState({
      issueDescription: changeEvent.target.value,
      descriptionError: false,
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
    if (this.state.issueDescription === "") {
      this.setState({
        descriptionError: true,
      });
    } else {
      let issue = {};
      issue.id = uuid();
      issue.issueDescription = this.state.issueDescription;
      issue.severity = this.state.severity;
      issue.status = this.state.selectedOption;
      this.props.onSave(issue);
    }
  }

  render() {
    return (
      <form style={{ margin: "20px" }} onSubmit={this.onSubmit}>
        <h1>Add an Issue</h1>
        Description:&nbsp;
        <input
          type="text"
          name="issueDescription"
          onChange={this.handledescriptionChange}
          style={{ width: "500px" }}
        />
        {this.state.descriptionError ? (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Issue Description is Required
          </p>
        ) : null}
        <br />
        <br />
        <label>
          Severity: &nbsp;
          <select onChange={this.handleSelectChange} name="severity">
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
              name="status"
              checked={this.state.selectedOption === "Open"}
              onChange={this.handleOptionChange}
            />
            Open
          </label>
          <label>
            <input
              type="radio"
              value="In Progress"
              name="status"
              checked={this.state.selectedOption === "In Progress"}
              onChange={this.handleOptionChange}
            />
            In Progerss
          </label>
          <label>
            <input
              type="radio"
              value="Closed"
              name="status"
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
