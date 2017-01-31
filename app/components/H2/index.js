//
// Component <h2></h2>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class H2 extends React.Component {
  render() {
    return (
      <h2>{this.props.title}</h2>
    );
  }
}

H2.propTypes = {
  title: React.PropTypes.string.isRequired,
};
