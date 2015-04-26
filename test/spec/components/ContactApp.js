'use strict';
import React from 'react/addons';
import ContactApp from 'components/ContactApp.js';

describe('Main', function () {

  var component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);
    component = React.createElement(ContactApp);
  });

  it('should create a new instance of ContactManagerReactApp', function () {
    expect(component).toBeDefined();
  });
});
