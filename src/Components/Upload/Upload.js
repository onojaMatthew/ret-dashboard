import React from "react";
import { Route, Switch } from "react-router-dom";
import UploadMovies from "./Movies/UploadMovies";
import Requests from "./Requests/Requests";
import UploadSeries from "./Series/UploadSeries";

const Upload = (props) => {
  const { match } = props;
  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}`} render={(props) => <UploadSeries {...props} />} />
        <Route exact path={`${match.url}/movies`} render={(props) => <UploadMovies {...props} />} />
        <Route exact path={`${match.url}/requests`} render={(props) => <Requests {...props} />} />
      </Switch>
    </div>
  );
}

export default Upload;