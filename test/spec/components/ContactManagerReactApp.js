'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ContactManagerReactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ContactManagerReactApp = require('components/ContactManagerReactApp.js');
    component = React.createElement(ContactManagerReactApp);
  });

  it('should create a new instance of ContactManagerReactApp', function () {
    expect(component).toBeDefined();
  });
});
