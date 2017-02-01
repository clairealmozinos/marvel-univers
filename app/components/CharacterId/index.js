//
// Component CharacterId
//

import React from 'react';
import H1 from 'components/H1';
import Img from 'components/Img';
import Table from 'components/Table';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class CharacterId extends React.Component {
  render() {
    const comicsName = this.props.character.comics.items.map(comic => comic.name);
    const seriesName = this.props.character.series.items.map(serie => serie.name);
    return (
      <div className="idPage">
        <Img src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`} alt={`${this.props.character.name} picture`} />
        <div>
          <H1 title={this.props.character.name} />
          <p>{this.props.character.description}</p>
        </div>
        <Table legends={['Comics']} values={comicsName} />
        <Table legends={['Séries']} values={seriesName} />
      </div>
    );
  }
}

CharacterId.propTypes = {
  character: React.PropTypes.object,
};
