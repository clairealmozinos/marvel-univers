//
// Container CharacterItem
//

import React from 'react';
import { Link } from 'react-router';
import H2 from 'components/H2';
import Img from 'components/Img';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <Link to={this.props.link}><Img src={this.props.imgSrc} alt={this.props.imgAlt} /></Link>
        <div>
          <Link to={this.props.link}><H2 title={this.props.title} /></Link>
          <Link to={this.props.link} className="details">Détails</Link>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
  imgAlt: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};
