//
// Container CharacterItem
//

import React from 'react';
import { Link } from 'react-router';
import H2 from 'components/H2';
import Img from 'components/Img';

/* eslint-disable react/prefer-stateless-function */
export default class CharacterItem extends React.Component {
  render() {
    return (
      <div>
        <Img src={`${this.props.item.thumbnail.path}.${this.props.item.thumbnail.extension}`} alt={`${this.props.item.name} picture`} />
        <H2 title={this.props.item.name} />
        <Link to={`/${this.props.item.name}/${this.props.item.id}`}>Détails</Link>
      </div>
    );
  }
}

CharacterItem.propTypes = {
  item: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.name,
    thumbnail: React.PropTypes.shape({
      path: React.PropTypes.string,
      extension: React.PropTypes.string,
    }),
  }).isRequired,
};
