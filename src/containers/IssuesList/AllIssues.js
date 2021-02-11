import React from "react";
import Issue from "../../components/Issue/Issue";
import AllIssuesCSS from "./AllIssues.module.css";
import { Link } from "react-router-dom";
import IssuesStore from "../../stores/IssuesStore";
import InitializeActions from "../../actions/InitializeActions";

export default class AllIssues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    IssuesStore.addChangeListener(this._onChange);
    InitializeActions.initIssues();
  }

  componentWillUnmount() {
    IssuesStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      issues: IssuesStore.getAllIssues(),
    });
  }

  render() {
    let issuesList = this.state.issues.map((issue) => (
      <Issue
        key={issue.id}
        id={issue.id}
        issueDescription={issue.issueDescription}
        severity={issue.severity}
        status={issue.status}
      />
    ));

    return (
      <div>
        <h1 className={AllIssuesCSS.issuesListHeader}>Issues List</h1>
        <table className={AllIssuesCSS.border}>
          <thead>
            <tr>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{issuesList}</tbody>
        </table>
        <Link to="/addIssue">Add Issue</Link>
      </div>
    );
  }
}
