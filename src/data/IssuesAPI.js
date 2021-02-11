// import IssuesData from "./IssuesData";
import axios from "axios";
// import _ from "lodash";

// const _clone = (item) => JSON.parse(JSON.stringify(item));

export default class IssuesAPI {
  static getAllIssues(cb) {
    axios
      .get("http://localhost:3001/issues")
      .then((response) => {
        cb(response.data);
      })
      .catch((error) => console.log(error));
  }

  static saveIssues(cb, issue) {
    console.log(issue);
    axios
      .post("http://localhost:3001/issues", issue)
      .then((res) => cb())
      .catch((err) => console.log(err));
  }
}
