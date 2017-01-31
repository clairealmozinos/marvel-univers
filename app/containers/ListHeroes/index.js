//
// ListHeroes page
//

import React from 'react';
import { connect } from 'react-redux';
import H1 from 'components/H1';
import Item from 'containers/Item';
import { getListHeroes } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ListHeroes extends React.Component {
  componentWillMount() {
    this.props.getListHeroes();
  }

  render() {
    return (
      <div>
        <H1 title="Liste des super héros :" />
        {this.props.heroes.map((hero, index) => <Item key={`item-${index}`} item={hero} />)}
      </div>
    );
  }
}

ListHeroes.propTypes = {
  heroes: React.PropTypes.arrayOf(React.PropTypes.object),
  getListHeroes: React.PropTypes.func,
};

//
// Mapping
//

function mapStateToProps(state) {
  return {
    heroes: state.get('listHeroes').heroes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getListHeroes: () => dispatch(getListHeroes()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListHeroes);
