import React from "react";
import IssueForm from "../NewIssue/IssueForm";
import { withRouter } from "react-router-dom";
import InitializeActions from "../../actions/InitializeActions";

class NewIssue extends React.Component {
  constructor(props) {
    super(props);
    this.saveIssue = this.saveIssue.bind(this);
  }
  saveIssue(issue) {
    console.log(issue);
    // IssuesAPI.saveIssues(issue);
    InitializeActions.addIssue(issue);
    this.props.history.push("/");
  }

  render() {
    return <IssueForm onSave={this.saveIssue} />;
  }
}

export default withRouter(NewIssue);
