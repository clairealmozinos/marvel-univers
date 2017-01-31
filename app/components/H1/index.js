//
// Component <h1></h1>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class H1 extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

H1.propTypes = {
  title: React.PropTypes.string.isRequired,
};
