import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import MobileNavigation from './Components/Elements/MobileNavigation';


export default function Routes() {

    const routes = [

        {
            path: '/blog',
            component: LandingPage
        },
        {
            path: '/mail',
            component: LandingPage
        },
        {
            path: '/forum',
            component: LandingPage
        },
        {
            path: '/ketchup',
            component: LandingPage
        },
        {
            path: '/event',
            component: LandingPage
        },
        {
            path: '/rsvp',
            component: LandingPage
        },
        {
            path: '/',
            component: LandingPage
        },
    ]

    return (
        <Router>
            <MobileNavigation />
            <Switch>
                {routes.map((route, key) => {
                    return <RoutWithSubRoutes key={key} {...route} />
                })}
            </Switch>
        </Router>
    )
}

const RoutWithSubRoutes = (route) => {
    return (
      <React.Fragment>
        <Route
          path={route.path}
          render={(props) => <route.component {...props} routes={route.routes} />}
        />
      </React.Fragment>
    );
  };