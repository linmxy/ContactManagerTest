'use strict';

var React = require('react/addons');
var Router = require('react-router');
var AppHeader = require('./AppHeader');

require('../../styles/less/main.less');

var ContactManagerReactApp = React.createClass({
  render: function() {
    return (
      <div>
        <AppHeader/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 main-container">
              <Router.RouteHandler/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactManagerReactApp;
