'use strict';

var ContactApp = require('./ContactApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var ContactList = require('./ContactList');
var ContactForm = require('./ContactForm');

var content = document.getElementById('content');

var Routes = (
  <Route path="/" handler={ContactApp}>
    <Route name="contactList" path="/" handler={ContactList}/>
    <Route name="contactCreate" path="contact/create" handler={ContactForm}/>
    <Route name="contactUpdate" path="contact/update/:id"  handler={ContactForm}/>
    <Router.DefaultRoute handler={ContactList} />
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});
