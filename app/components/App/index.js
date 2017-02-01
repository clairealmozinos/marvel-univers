//
// App
//

import React from 'react';
import Header from 'components/Header';

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
