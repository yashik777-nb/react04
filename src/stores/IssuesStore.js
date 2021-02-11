import Dispatcher from "../dispatcher/Dispatcher";
import * as ActionTypes from "../constants/ActionTypes";
import { EventEmitter } from "events";
import _ from "lodash";

let _issues = [];

class IssuesStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on("change", cb);
  }

  removeChangeListener(cb) {
    this.removeListener("change", cb);
  }

  emitChange() {
    this.emit("change");
  }

  getAllIssues() {
    return _issues;
  }
}

let IssuesStore = new IssuesStoreClass();
export default IssuesStore;

Dispatcher.register((action) => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _issues = action.issues;
      IssuesStore.emitChange();
      break;
    case ActionTypes.ADD_ISSUE:
      _issues.push(action.issue);
      IssuesStore.emitChange();
      break;
    case ActionTypes.DELETE_ISSUE:
      _.remove(_issues, (issue) => action.id === issue.id);
      console.log("Emitting Delete Change..." + action.id);
      IssuesStore.emitChange();
      break;
    default:
  }
});
