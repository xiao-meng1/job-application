import React, { Component } from 'react';
import Button from './button';
import styles from '../styles/informationForm.module.css';

class InformationForm extends Component {
  render() {
    return (
      <form>
        <fieldset className={styles.fieldset}>
          <h3>Personal Information</h3>
          <input type="text" className={styles.input} placeholder="Name" />
          <input
            type="tel"
            className={styles.input}
            placeholder="Phone Number"
          />
          <input type="email" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Address" />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <h3>Education</h3>
          <input
            type="text"
            className={styles.input}
            placeholder="University"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Degree Name"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Start Date"
          />
          <input type="text" className={styles.input} placeholder="End Date" />
          <div className={styles['button-container']}>
            <Button textContent="Delete" />
            <Button textContent="Add" />
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <h3>Work Experience</h3>
          <input type="text" className={styles.input} placeholder="Company" />
          <input type="text" className={styles.input} placeholder="Position" />
          <input
            type="text"
            className={styles.input}
            placeholder="Start Date"
          />
          <input type="text" className={styles.input} placeholder="End Date" />
          <textarea className={styles['text-area']} placeholder="Description" />
          <div className={styles['button-container']}>
            <Button textContent="Delete" />
            <Button textContent="Add" />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default InformationForm;
