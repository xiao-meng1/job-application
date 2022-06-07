import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

class Button extends Component {
  render() {
    const { name, textContent, className, onButtonClick } = this.props;

    return (
      <button
        name={name}
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
  name: '',
  textContent: '',
  className: '',
  onButtonClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string,
  textContent: PropTypes.string,
  className: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Button;
