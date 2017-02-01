//
// Component <th></th>
//

import React from 'react';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Th extends React.Component {
  render() {
    return (
      <th>{this.props.value}</th>
    );
  }
}

Th.propTypes = {
  value: React.PropTypes.string.isRequired,
};
