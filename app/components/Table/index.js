//
// Component <table></table>
//

import React from 'react';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <Tr items={this.props.legends} component={Th} className={this.props.className} />
        </thead>
        <tbody>
          {this.props.values.map((value, index) => (
            <Tr
              key={`item-${index}`} items={[value]} className={this.props.className}
              component={Td}
            />
            )
          )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  legends: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  className: React.PropTypes.string,
  values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
