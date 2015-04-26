'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import ContactConstants from '../constants/ContactConstants';

var ContactActions = {

  /**
   * @param  {string} text
   */
  create: function(contact) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_CREATE,
      contact
    });
  },

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  update: function(id, contact) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_UPDATE,
      id,
      contact
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_DESTROY,
      id: id
    });
  }

};

export default ContactActions;
