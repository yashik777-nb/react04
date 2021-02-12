import React from "react";
import { Link, withRouter } from "react-router-dom";

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.issueClicked = this.issueClicked.bind(this);
  }

  issueClicked(e) {
    console.log(this.props);
    if (window.confirm("Are you sure you want to view the details ?"))
      this.props.history.push(`/issues/${this.props.issueDescription}`);
  }
  render() {
    // const path = `/issues/${this.props.issueDescription}`;
    return (
      <tr>
        <td>
          <Link onClick={this.issueClicked}>{this.props.issueDescription}</Link>
        </td>
        <td>{this.props.severity}</td>
        <td>{this.props.status}</td>
      </tr>
    );
  }
}

export default withRouter(Issue);
