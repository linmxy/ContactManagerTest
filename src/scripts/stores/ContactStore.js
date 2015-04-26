'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import ContactConstants from '../constants/ContactConstants';
import util from '../util/util';
import __  from 'lodash';

var CHANGE_EVENT = 'change';
var LOCALSTORAGE_KEY = 'contacts-localCache';

var _contacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)||'{}');

/**
 * Create a Contact item.
 * @param  {tel, email, name}  The pojo of the Contact
 */
function create(contact) {
  contact.id = util.oid();
  contact.avatar =  '/images/faces/' + Math.ceil(14 * Math.random()) + '.jpg';
  _contacts[contact.id] = contact;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(_contacts));
}

function update(id, updates) {
  _contacts[id] = __.extend({}, _contacts[id], updates);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(_contacts));
}

function destroy(id) {
  delete _contacts[id];
}

var ContactStore = __.extend({}, EventEmitter.prototype, {
  getAll: function() {
    return __.values(_contacts);
  },

  getById: function(id) {
    return _contacts[id];
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
      if (action && action.id && action.contact) {
        update(action.id, action.contact);
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

if(__.keys(_contacts).length<1){
  [{
    name : 'Terrence S. Hatfield',
    tel: '651-603-1723',
    email: 'TerrenceSHatfield@rhyta.com'
  },
    {
      name : 'Chris M. Manning',
      tel: '513-307-5859',
      email: 'ChrisMManning@dayrep.com'
    },
    {
      name : 'Ricky M. Digiacomo',
      tel: '918-774-0199',
      email: 'RickyMDigiacomo@teleworm.us'
    },
    {
      name : 'Michael K. Bayne',
      tel: '702-989-5145',
      email: 'MichaelKBayne@rhyta.com'
    },
    {
      name : 'John I. Wilson',
      tel: '318-292-6700',
      email: 'JohnIWilson@dayrep.com'
    },
    {
      name : 'Rodolfo P. Robinett',
      tel: '803-557-9815',
      email: 'RodolfoPRobinett@jourrapide.com'
    }
  ].forEach(function (contact) {
      AppDispatcher.dispatch({
        actionType: ContactConstants.CONTACT_CREATE,
        contact
      });
    });
}

export default ContactStore;
