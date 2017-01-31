//
// CharacterId page
//

import React from 'react';
import { connect } from 'react-redux';
import H1 from 'components/H1';
import { getCharacterId } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CharacterId extends React.Component {
  componentWillMount() {
    this.props.getCharacterId(window.location.pathname.split('/')[2]);
  }

  render() {
    return (
      <div>
        <H1 title="Héro :" />
      </div>
    );
  }
}

CharacterId.propTypes = {
  getCharacterId: React.PropTypes.func,
};

//
// Mapping
//

function mapStateToProps() {
  return {
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
)(CharacterId);
