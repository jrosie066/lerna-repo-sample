import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Home } from './Home';
// import your pages here

export const createRoutes = () => {
  return (
    <Switch>
      /* Add your base path page component here */
      <Route exact path="/" component={Home} />
      {
        [
          {
            component: Home, /* Add your base path page here */
            path: '/',
          }
          // add other pages in this array
        ].map((settings, index) => (
          < Route exact key={`Route-${index}`} {...settings} />
        ))
      }
      {/* TODO: change to Error route */}
      <Redirect from="*" to="/" />
    </Switch>
  );
};
