import React from "react";
import { Link } from "react-router-dom";

export default class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.issueClicked = this.issueClicked.bind(this);
  }

  issueClicked(e) {
    window.confirm("Are you sure you want to view the details ?");
  }
  render() {
    const path = `/issues/${this.props.issueDescription}`;
    return (
      <tr>
        <td>
          <Link onClick={this.issueClicked} to={path}>
            {this.props.issueDescription}
          </Link>
        </td>
        <td>{this.props.severity}</td>
        <td>{this.props.status}</td>
      </tr>
    );
  }
}
