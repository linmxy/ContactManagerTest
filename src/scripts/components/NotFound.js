'use strict';

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render: function() {
    return (
        <div>
          Not Found!
          <Link to="contactList" className="btn btn-link">Goto Home Page{'>>'}</Link>
        </div>
    );
  }
});
