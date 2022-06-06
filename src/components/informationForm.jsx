import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styles from '../styles/informationForm.module.css';

class InformationForm extends Component {
  render() {
    const { applicantInformation } = this.props;
    const { personalInformation, education, workExperience } =
      applicantInformation;

    return (
      <form>
        <fieldset className={styles.fieldset}>
          <h3>Personal Information</h3>
          <input
            value={personalInformation.name}
            type="text"
            className={styles.input}
            placeholder="Name"
          />
          <input
            value={personalInformation.phoneNumber}
            type="tel"
            className={styles.input}
            placeholder="Phone Number"
          />
          <input
            value={personalInformation.email}
            type="email"
            className={styles.input}
            placeholder="Email"
          />
          <input
            value={personalInformation.address}
            type="text"
            className={styles.input}
            placeholder="Address"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <h3>Education</h3>
          {education.map((x) => (
            <fieldset key={x.id} className={styles.fieldset}>
              <input
                value={x.university}
                type="text"
                className={styles.input}
                placeholder="University"
              />
              <input
                value={x.degreeName}
                type="text"
                className={styles.input}
                placeholder="Degree Name"
              />
              <input
                value={x.startDate}
                type="text"
                className={styles.input}
                placeholder="Start Date"
              />
              <input
                value={x.endDate}
                type="text"
                className={styles.input}
                placeholder="End Date"
              />
              <div className={styles['button-container']}>
                <Button textContent="Delete" />
                <Button textContent="Add" />
              </div>
            </fieldset>
          ))}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <h3>Work Experience</h3>
          {workExperience.map((x) => (
            <fieldset key={x.id} className={styles.fieldset}>
              <input
                value={x.company}
                type="text"
                className={styles.input}
                placeholder="Company"
              />
              <input
                value={x.position}
                type="text"
                className={styles.input}
                placeholder="Position"
              />
              <input
                value={x.startDate}
                type="text"
                className={styles.input}
                placeholder="Start Date"
              />
              <input
                value={x.endDate}
                type="text"
                className={styles.input}
                placeholder="End Date"
              />
              <textarea
                value={x.description}
                className={styles['text-area']}
                placeholder="Description"
              />
              <div className={styles['button-container']}>
                <Button textContent="Delete" />
                <Button textContent="Add" />
              </div>
            </fieldset>
          ))}
        </fieldset>
      </form>
    );
  }
}

InformationForm.defaultProps = {
  applicantInformation: {
    personalInformation: {
      name: '',
      phoneNumber: '',
      email: '',
      address: '',
    },
    education: [
      {
        id: '',
        university: '',
        degreeName: '',
        startDate: '',
        endDate: '',
      },
    ],
    workExperience: [
      {
        id: '',
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
  },
};

InformationForm.propTypes = {
  applicantInformation: PropTypes.shape({
    personalInformation: PropTypes.shape({
      name: PropTypes.string,
      phoneNumber: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.string,
    }),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        university: PropTypes.string,
        degreeName: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
      })
    ),
    workExperience: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        company: PropTypes.string,
        position: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
};

export default InformationForm;
