import React, { Component } from 'react';
import Button from './button';
import styles from '../styles/footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Button textContent="Save and Continue" className="save-and-continue" />
      </footer>
    );
  }
}

export default Footer;
