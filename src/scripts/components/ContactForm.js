'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ContactActions = require('../actions/ContactActions');
var ContactStore = require('../stores/ContactStore');

var ContactForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    var { router } = this.context;
    var params = router.getCurrentParams();
    var contact = params.id? ContactStore.getById((params.id)): {};
    return contact;
  },

  _onSave: function (e) {
    e.preventDefault();
    ContactActions.create(this.state);
    this.context.router.transitionTo('contactList');
  },
  render: function () {
    return (
      <div>
        <h2 className="page-header text-center">{this.state.id ? 'Edit' : 'New'} Contact</h2>
        <form role="form" className="form-horizontal contract-form" onSubmit={this._onSave}>
          <div className="form-group">
            <label className="col-sm-4 control-label">Full name:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control contact-name-input"
                 valueLink={this.linkState('name')}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Email address:</label>
            <div className="col-sm-6">
              <input type="email" className="form-control contact-email-input"
                valueLink={this.linkState('email')} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Telephone number:</label>
            <div className="col-sm-6">
              <input type="tel" className="form-control contact-tel-input"
                valueLink={this.linkState('tel')}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-3">
              <button type="submit" className="btn btn-outline btn-lg btn-block">Submit</button>
            </div>
            <div className="col-sm-3">
              <Link to="contactList" className="btn btn-outline btn-lg btn-block">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = ContactForm;
