//
// ListCharacters page
//

import React from 'react';
import { connect } from 'react-redux';
import H1 from 'components/H1';
import CharacterItem from 'containers/CharacterItem';
import { getListCharacters } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ListCharacters extends React.Component {
  componentWillMount() {
    this.props.getListCharacters();
  }

  render() {
    return (
      <div>
        <H1 title="Liste des super héros :" />
        {this.props.characters.map((character, index) => <CharacterItem key={`item-${index}`} item={character} />)}
      </div>
    );
  }
}

ListCharacters.propTypes = {
  characters: React.PropTypes.arrayOf(React.PropTypes.object),
  getListCharacters: React.PropTypes.func,
};

//
// Mapping
//

function mapStateToProps(state) {
  return {
    characters: state.get('listCharacters').characters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getListCharacters: () => dispatch(getListCharacters()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListCharacters);
