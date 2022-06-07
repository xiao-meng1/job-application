import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styles from '../styles/informationForm.module.css';

class InformationForm extends Component {
  render() {
    const {
      applicantInformation,
      updateFormInput,
      addFormField,
      deleteFormField,
    } = this.props;
    const { personalInformation, education, workExperience } =
      applicantInformation;

    return (
      <form>
        <fieldset name="personalInformation" className={styles.fieldset}>
          <h3>Personal Information</h3>
          <input
            name="name"
            value={personalInformation.name}
            type="text"
            className={styles.input}
            placeholder="Name"
            onChange={updateFormInput}
          />
          <input
            name="phoneNumber"
            value={personalInformation.phoneNumber}
            type="tel"
            className={styles.input}
            placeholder="Phone Number"
            onChange={updateFormInput}
          />
          <input
            name="email"
            value={personalInformation.email}
            type="email"
            className={styles.input}
            placeholder="Email"
            onChange={updateFormInput}
          />
          <input
            name="address"
            value={personalInformation.address}
            type="text"
            className={styles.input}
            placeholder="Address"
            onChange={updateFormInput}
          />
        </fieldset>
        <fieldset name="education" className={styles.fieldset}>
          <h3>Education</h3>
          {education.length === 0 ? (
            <div className={styles['button-container']}>
              <Button
                name="add"
                textContent="Add"
                onButtonClick={addFormField}
              />
            </div>
          ) : null}
          {education.map((x) => (
            <fieldset
              name="education"
              key={x.id}
              data-key={x.id}
              className={styles.fieldset}
            >
              <input
                name="university"
                value={x.university}
                type="text"
                className={styles.input}
                placeholder="University"
                onChange={updateFormInput}
              />
              <input
                name="degreeName"
                value={x.degreeName}
                type="text"
                className={styles.input}
                placeholder="Degree Name"
                onChange={updateFormInput}
              />
              <input
                name="startDate"
                value={x.startDate}
                type="text"
                className={styles.input}
                placeholder="Start Date"
                onChange={updateFormInput}
              />
              <input
                name="endDate"
                value={x.endDate}
                type="text"
                className={styles.input}
                placeholder="End Date"
                onChange={updateFormInput}
              />
              <div className={styles['button-container']}>
                <Button
                  name="delete"
                  textContent="Delete"
                  onButtonClick={deleteFormField}
                />
                <Button
                  name="add"
                  textContent="Add"
                  onButtonClick={addFormField}
                />
              </div>
            </fieldset>
          ))}
        </fieldset>
        <fieldset name="workExperience" className={styles.fieldset}>
          <h3>Work Experience</h3>
          {workExperience.length === 0 ? (
            <div className={styles['button-container']}>
              <Button
                name="add"
                textContent="Add"
                onButtonClick={addFormField}
              />
            </div>
          ) : null}
          {workExperience.map((x) => (
            <fieldset
              name="workExperience"
              key={x.id}
              data-key={x.id}
              className={styles.fieldset}
            >
              <input
                name="company"
                value={x.company}
                type="text"
                className={styles.input}
                placeholder="Company"
                onChange={updateFormInput}
              />
              <input
                name="position"
                value={x.position}
                type="text"
                className={styles.input}
                placeholder="Position"
                onChange={updateFormInput}
              />
              <input
                name="startDate"
                value={x.startDate}
                type="text"
                className={styles.input}
                placeholder="Start Date"
                onChange={updateFormInput}
              />
              <input
                name="endDate"
                value={x.endDate}
                type="text"
                className={styles.input}
                placeholder="End Date"
                onChange={updateFormInput}
              />
              <textarea
                name="description"
                value={x.description}
                className={styles['text-area']}
                placeholder="Description"
                onChange={updateFormInput}
              />
              <div className={styles['button-container']}>
                <Button
                  name="delete"
                  textContent="Delete"
                  onButtonClick={deleteFormField}
                />
                <Button
                  name="add"
                  textContent="Add"
                  onButtonClick={addFormField}
                />
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
  updateFormInput: () => {},
  addFormField: () => {},
  deleteFormField: () => {},
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
  updateFormInput: PropTypes.func,
  addFormField: PropTypes.func,
  deleteFormField: PropTypes.func,
};

export default InformationForm;
