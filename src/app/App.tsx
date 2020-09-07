import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ContactList from '../app/containers/ContactList'
import ContactDetails from '../app/containers/ContactDetails'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            component={ContactList}
            exact={true}
          />
          <Route
            path="/details/:contactId"
            component={ContactDetails}
            exact={true}
          />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
