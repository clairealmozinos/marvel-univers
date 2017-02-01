//
// Component <td></td>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Td extends React.Component {
  render() {
    return (
      <td>{this.props.value}</td>
    );
  }
}

Td.propTypes = {
  value: React.PropTypes.string.isRequired,
};
