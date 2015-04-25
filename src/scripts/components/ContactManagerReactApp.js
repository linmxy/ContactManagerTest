'use strict';

var React = require('react/addons');
var Router = require('react-router');
var AppHeader = require('./AppHeader');

require('../../styles/normalize.css');
require('../../styles/main.css');

var ContactManagerReactApp = React.createClass({
  render: function() {
    return (
        <div>
            <AppHeader/>
            <Router.RouteHandler/>
        </div>
    );
  }
});

module.exports = ContactManagerReactApp;
