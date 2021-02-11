import Dispatcher from "../dispatcher/Dispatcher";
import IssuesAPI from "../data/IssuesAPI";
import * as ActionTypes from "../constants/ActionTypes";

export default class InitializeActions {
  static initIssues() {
    IssuesAPI.getAllIssues((data) => {
      Dispatcher.dispatch({
        actionType: ActionTypes.INITIALIZE,
        issues: data,
      });
    });
  }

  static addIssue(issue) {
    IssuesAPI.saveIssues(() => {
      Dispatcher.dispatch({
        actionType: ActionTypes.ADD_ISSUE,
        issue: issue,
      });
    }, issue);
  }
}
