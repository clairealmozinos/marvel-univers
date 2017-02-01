//
// Component CharacterId
//

import React from 'react';
import H1 from 'components/H1';
import Img from 'components/Img';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';

/* eslint-disable react/prefer-stateless-function */
export default class CharacterId extends React.Component {
  render() {
    console.log(this.props.character.comics.items);
    return (
      <div>
        <Img src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`} alt={`${this.props.character.name} picture`} />
        <div>
          <H1 title={this.props.character.name} />
          <p>{this.props.character.description}</p>
        </div>
        <table>
          <thead>
            <Tr items={['Comics']} component={Th} />
          </thead>
          <tbody>
            {this.props.character.comics.items.map((comic, index) => (
              <Tr
                key={`item-${index}`} items={[comic.name]}
                component={Td}
              />
              )
            )}
          </tbody>
        </table>
        <table>
          <thead>
            <Tr items={['Séries']} component={Th} />
          </thead>
          <tbody>
            {this.props.character.series.items.map((serie, index) => (
              <Tr
                key={`item-${index}`} items={[serie.name]}
                component={Td}
              />
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

CharacterId.propTypes = {
  character: React.PropTypes.object,
};
