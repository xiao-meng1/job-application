import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/header.module.css';

function Header(props) {
  const { textContent } = props;
  return (
    <header className={styles.header}>
      <h1 className={styles.text}>{textContent}</h1>
    </header>
  );
}

Header.defaultProps = {
  textContent: 'Header Text',
};

Header.propTypes = {
  textContent: PropTypes.string,
};

export default Header;
