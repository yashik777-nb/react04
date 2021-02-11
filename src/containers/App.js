import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import NewIssue from "../containers/NewIssue/NewIssue";
import NotFound from "../containers/NotFound/NotFound";
import AllIssues from "../containers/IssuesList/AllIssues";
import About from "../containers/AboutContainer/About";
import IssueDetail from "../containers/IssuesList/IssueDetail/IssueDetail";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <NavLink activeClassName="active" exact to="/about">
              About
            </NavLink>
            &nbsp;
            <NavLink activeClassName="active" exact to="/">
              Issues
            </NavLink>
          </header>
          <Switch>
            <Route path="/addIssue" component={NewIssue} />
            <Route path="/about" component={About} />
            <Route path="/issues/:issueDescription" component={IssueDetail} />
            <Route path="/" component={AllIssues} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
