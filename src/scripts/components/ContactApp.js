'use strict';

import React from 'react/addons';
import Router from 'react-router';
import AppHeader from './AppHeader';

require('../../styles/less/main.less');

var ContactApp = React.createClass({
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

module.exports = ContactApp;
