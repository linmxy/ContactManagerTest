'use strict';

import ContactApp from './components/ContactApp';
import React from'react';
import Router from 'react-router';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
let Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route path="/" handler={ContactApp}>
    <Route name="contactList" path="/" handler={ContactList}/>
    <Route name="contactCreate" path="contact/create" handler={ContactForm}/>
    <Route name="contactUpdate" path="contact/update/:id"  handler={ContactForm}/>
    <Router.DefaultRoute handler={ContactList} />
    <Router.NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});
