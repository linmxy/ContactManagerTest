'use strict';

var React = require('react');


var AppHeader = React.createClass({
  render: function() {
    return (
        <header className="bs-header">
            <div className="container">
                <h1>Contact Manager</h1>
                <p>Simple React.js example application</p>
            </div>
        </header>
    );
  }
});

module.exports = AppHeader;
