//
// Header
//

import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router';
import styles from './styles.css';
import Logo from './marvel-logo.png';

/* eslint-disable react/prefer-stateless-function */
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/"><Img src={Logo} alt="Logo marvel" /></Link>
      </header>
    );
  }
}
