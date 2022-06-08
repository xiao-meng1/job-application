import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

function Button(props) {
  const { name, textContent, className, onButtonClick } = props;

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
