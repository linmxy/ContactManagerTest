'use strict';

var React = require('react');


var ContactList = React.createClass({
  render: function () {
    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={this.props.avatar}/>
        </div>
        <div className="media-heading">
          <h3>
              {this.props.name}
            <small>
              <a href={'contact/' + this.props.id}>
                <span className="glyphicon glyphicon-pencil"></span>
              </a>
              <a href={'contact/' + this.props.id + '/delete'} className="delete-contract">
                <span className="glyphicon glyphicon-trash"></span>
              </a>
            </small>
          </h3>
        </div>
        <div className="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>{this.props.tel}</dd>
            <dt>Email:</dt>
            <dd>{this.props.email}</dd>
          </dl>
        </div>
      </li>
    );
  }
});

module.exports = ContactList;
