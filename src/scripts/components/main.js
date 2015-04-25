'use strict';

var ContactManagerReactApp = require('./ContactManagerReactApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var ContactList = require('./ContactList');
var ContactForm = require('./ContactForm');

var content = document.getElementById('content');

var Routes = (
  <Route path="/" handler={ContactManagerReactApp}>
    <Route name="contactList" path="/" handler={ContactList}/>
    <Route name="contactCreate" path="contact/create" handler={ContactForm}/>
    <Route name="contactUpdate" path="contact/update/:id"  handler={ContactForm}/>
    <Router.DefaultRoute  path="/" handler={ContactList} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
