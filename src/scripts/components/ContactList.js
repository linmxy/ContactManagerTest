'use strict';

var React = require('react');
var Link = require('react-router').Link;
var ContactItem = require('./ContactItem');
var ContactStore = require('../stores/ContactStore');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var ContactList = React.createClass({
  mixins: [PureRenderMixin],

  getInitialState: function() {
    return this._getContactState();
  },

  componentDidMount: function() {
    ContactStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ContactStore.removeChangeListener(this._onChange);
  },
  _getContactState: function() {
    return {
      contacts: ContactStore.getAll()
    };
  },

  _onChange: function() {
    this.setState(this._getContactState());
  },

  render: function() {
    var contacts = this.state.contacts;
    var contactViews = contacts.map(function(contact){
      return <ContactItem id={contact.id} contact={contact} />;
    });

    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <div className="row">
          <p className="col-sm-12 text-center">
            <Link to="contactCreate" className="btn btn-lg btn-outline">Add Contact</Link>
          </p>
        </div>
          <ul className="media-list row contacts-container">
          {contactViews}
          </ul>
      </div>
    );
  }
});

module.exports = ContactList;
