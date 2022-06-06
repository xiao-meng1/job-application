import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styles from '../styles/footer.module.css';

class Footer extends Component {
  render() {
    const { page } = this.props;
    const buttons = [];
    let footerClass;

    if (page === 'My Information') {
      footerClass = 'my-information';
      buttons.push(
        <Button
          key="0"
          textContent="Save and Continue"
          className="save-and-continue"
        />
      );
    } else if (page === 'Review') {
      footerClass = 'review';
      buttons.push(<Button key="0" textContent="Back" className="back" />);
      buttons.push(<Button key="1" textContent="Submit" className="submit" />);
    }

    return (
      <footer className={`${styles.footer} ${styles[footerClass]}`}>
        {buttons}
      </footer>
    );
  }
}

Footer.defaultProps = {
  page: 'My Information',
};

Footer.propTypes = {
  page: PropTypes.string,
};

export default Footer;
