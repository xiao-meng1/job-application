import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/header.module.css';

class Header extends Component {
  render() {
    const { textContent } = this.props;
    return (
      <header className={styles.header}>
        <h1 className={styles.text}>{textContent}</h1>
      </header>
    );
  }
}

Header.defaultProps = {
  textContent: 'Header Text',
};

Header.propTypes = {
  textContent: PropTypes.string,
};

export default Header;
