//
// App
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
