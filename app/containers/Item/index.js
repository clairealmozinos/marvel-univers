//
// Component <Item></Item>
//

import React from 'react';
import H2 from 'components/H2';
import { Link } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
export default class Item extends React.Component {
  render() {
    return (
      <div>
        <H2 title={this.props.item.name} />
        <Link to={`/${this.props.item.name}/${this.props.item.id}`}>Détails</Link>
      </div>
    );
  }
}

Item.propTypes = {
  item: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.name,
  }).isRequired,
};
