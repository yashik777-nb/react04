import React from "react";
import { Link } from "react-router-dom";

export default class IssueDetail extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h1>Issue Details</h1>
        <p>
          <strong>Issue Description:</strong>{" "}
          {this.props.match.params.issueDescription}
        </p>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
