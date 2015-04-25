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

/**
 * Update a Contact item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  _contacts[id] = __.extend({}, _contacts[id], updates);
}

/**
 * Delete a Contact item.
 * @param  {string} id
 */
function destroy(id) {
  delete _contacts[id];
}

var ContactStore = __.extend({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return __.values(_contacts);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case ContactConstants.CONTACT_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        ContactStore.emitChange();
      }
      break;

    default:
      // no op
  }
});

module.exports = ContactStore;
