'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ContactItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  _edit: function(e){
    this.context.router.transitionTo('contactUpdate',null, this.props.contact);
  },
  render: function () {
    var contact = this.props.contact;
    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={contact.avatar}/>
        </div>
        <div className="media-heading">
          <h3>
              {contact.name}
            <small>
              <a onClick={this._edit}>
                <span className="glyphicon glyphicon-pencil"></span>
              </a>
              <a className="delete-contract">
                <span className="glyphicon glyphicon-trash"></span>
              </a>
            </small>
          </h3>
        </div>
        <div className="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>{contact.tel}</dd>
            <dt>Email:</dt>
            <dd>{contact.email}</dd>
          </dl>
        </div>
        <hr/>
      </li>
    );
  }
});

module.exports = ContactItem;
