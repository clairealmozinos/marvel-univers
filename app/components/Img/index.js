//
// Component <img/>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Img extends React.Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} />
    );
  }
}

Img.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
};
