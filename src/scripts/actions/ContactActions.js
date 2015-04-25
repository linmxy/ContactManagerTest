var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContactConstants = require('../constants/ContactConstants');

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

module.exports = ContactActions;
