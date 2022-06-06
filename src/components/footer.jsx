import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styles from '../styles/footer.module.css';

class Footer extends Component {
  render() {
    const { page, setPage } = this.props;
    const buttons = [];
    let footerClass;

    if (page === 'My Information') {
      footerClass = 'my-information';
      buttons.push(
        <Button
          key="0"
          textContent="Save and Continue"
          className="save-and-continue"
          onButtonClick={setPage}
        />
      );
    } else if (page === 'Review') {
      footerClass = 'review';
      buttons.push(
        <Button
          key="0"
          textContent="Back"
          className="back"
          onButtonClick={setPage}
        />
      );
      buttons.push(
        <Button
          key="1"
          textContent="Submit"
          className="submit"
          onButtonClick={setPage}
        />
      );
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
  setPage: () => {},
};

Footer.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
};

export default Footer;
