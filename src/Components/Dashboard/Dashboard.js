import React from "react";
import { Switch, Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import Originals from "../Originals/Originals";
import Reality from "../RealityShows/Reality";
import Transaction from "../Transaction/Transaction";
import TVShow from "../TVShow/TVShow";
import Content from "./Content";
import Finance from "./Finance";
import Users from "./Users";
import User from "../Users/Users";
import Upload from "../Upload/Upload";

const Dashboard = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${props.match.url}`} render={(props) => <Users {...props} />} />
        <Route exact path={`${props.match.url}/content`} render={(props) => <Content {...props} />} />
        <Route exact path={`${props.match.url}/finance`} render={(props) => <Finance {...props} />} />
        <Route exact path={`${props.match.url}/transactions`} render={(props) => <Transaction {...props} />} />
        <Route exact path={`${props.match.url}/movies`} render={(props) => <Movies {...props} />} />
        <Route exact path={`${props.match.url}/originals`} render={(props) => <Originals {...props} />} />
        <Route exact path={`${props.match.url}/tvshows`} render={(props) => <TVShow {...props} />} />
        <Route exact path={`${props.match.url}/realityshows`} render={(props) => <Reality {...props} />} />
        <Route exact path={`${props.match.url}/users`} render={(props) => <User {...props} />} />
        <Route path={`${props.match.url}/upload`} render={(props) => <Upload {...props} />} />
      </Switch>
    </div>
  );
}

export default Dashboard;