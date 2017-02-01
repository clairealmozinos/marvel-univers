//
// Container CharacterId
//

import React from 'react';
import { connect } from 'react-redux';
import CharacterId from 'components/CharacterId';
import { getCharacterId } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CharacterIdContainer extends React.Component {
  componentWillMount() {
    this.props.getCharacterId(window.location.pathname.split('/')[2]);
  }

  render() {
    if (this.props.character.length <= 0) {
      return (<div />);
    }
    const character = this.props.character[0];
    return (
      <CharacterId character={character} />
    );
  }
}

CharacterIdContainer.propTypes = {
  character: React.PropTypes.arrayOf(React.PropTypes.object),
  getCharacterId: React.PropTypes.func,
};

//
// Mapping
//

function mapStateToProps(state) {
  return {
    character: state.get('characterId').character,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacterId: id => dispatch(getCharacterId(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterIdContainer);
