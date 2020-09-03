import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import Dashboard  from "../pages/Dashboard";
import RepositoryDetails  from "../pages/RepositoryDetails";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/repositories/:id+" component={RepositoryDetails}/>
        <Redirect path="*" to="/"/>
    </Switch>
)

export default Routes;
