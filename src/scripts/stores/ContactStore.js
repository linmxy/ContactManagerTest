var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ContactConstants = require('../constants/ContactConstants');
var util = require('../util/util');
var __ = require('lodash');

var CHANGE_EVENT = 'change';

var _contacts = {};

/**
 * Create a Contact item.
 * @param  {tel, email, name}  The pojo of the Contact
 */
function create(contact) {
  contact.id = util.oid();
  _contacts[contact.id] = contact;
}

function update(id, updates) {
  _contacts[id] = __.extend({}, _contacts[id], updates);
}

function destroy(id) {
  delete _contacts[id];
}

var ContactStore = __.extend({}, EventEmitter.prototype, {
  getAll: function() {
    return __.values(_contacts);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var contact, id;

  switch(action.actionType) {
    case ContactConstants.CONTACT_CREATE:
      contact = action.contact;
      if (contact) {
        create(contact);
        ContactStore.emitChange();
      }
      break;
    case ContactConstants.CONTACT_UPDATE:
      contact = action.contact;
      if (contact && contact.id) {
        update(contact);
        ContactStore.emitChange();
      }
      break;
    case ContactConstants.CONTACT_DESTROY:
      id = action.id;
      if (id) {
        destroy(id);
        ContactStore.emitChange();
      }
      break;

    default:
      // no op
  }
});


AppDispatcher.dispatch({
  actionType: ContactConstants.CONTACT_CREATE,
  contact: {
    'name': 'Test',
    'tel': '324234234',
    'email': 'asdf@dsf',
    'avatar': '/images/faces/1.jpg'
  }
});
AppDispatcher.dispatch({
  actionType: ContactConstants.CONTACT_CREATE,
  contact: {
    'name': 'Test',
    'tel': '324234234',
    'email': 'asdf@dsf',
    'avatar': '/images/faces/1.jpg'
  }
});
AppDispatcher.dispatch({
  actionType: ContactConstants.CONTACT_CREATE,
  contact: {
    'name': 'Test',
    'tel': '324234234',
    'email': 'asdf@dsf',
    'avatar': '/images/faces/1.jpg'
  }
});
AppDispatcher.dispatch({
  actionType: ContactConstants.CONTACT_CREATE,
  contact: {
    'name': 'Test',
    'tel': '324234234',
    'email': 'asdf@dsf',
    'avatar': '/images/faces/1.jpg'
  }
});

module.exports = ContactStore;
