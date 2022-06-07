import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styles from '../styles/footer.module.css';

class Footer extends Component {
  render() {
    const { page, updatePage } = this.props;
    const buttons = [];
    let footerClass;

    if (page === 'My Information') {
      footerClass = 'my-information';
      buttons.push(
        <Button
          name="save and continue"
          key="0"
          textContent="Save and Continue"
          className="save-and-continue"
          onButtonClick={updatePage}
        />
      );
    } else if (page === 'Review') {
      footerClass = 'review';
      buttons.push(
        <Button
          name="back"
          key="0"
          textContent="Back"
          className="back"
          onButtonClick={updatePage}
        />
      );
      buttons.push(
        <Button
          name="submit"
          key="1"
          textContent="Submit"
          className="submit"
          onButtonClick={updatePage}
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
  updatePage: () => {},
};

Footer.propTypes = {
  page: PropTypes.string,
  updatePage: PropTypes.func,
};

export default Footer;
