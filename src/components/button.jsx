import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

class Button extends Component {
  render() {
    const { textContent, className } = this.props;

    return (
      <button type="button" className={styles[className]}>
        {textContent}
      </button>
    );
  }
}

Button.defaultProps = {
  textContent: 'Button Text',
  className: 'button',
};

Button.propTypes = {
  textContent: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
