import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

class Button extends Component {
  render() {
    const { textContent, className, onButtonClick } = this.props;

    return (
      <button
        type="button"
        className={styles[className]}
        onClick={onButtonClick}
      >
        {textContent}
      </button>
    );
  }
}

Button.defaultProps = {
  textContent: 'Button Text',
  className: 'button',
  onButtonClick: () => {},
};

Button.propTypes = {
  textContent: PropTypes.string,
  className: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Button;
