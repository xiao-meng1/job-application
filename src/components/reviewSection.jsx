import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from '../styles/reviewSection.module.css';

class ReviewSection extends Component {
  render() {
    const { applicantInformation } = this.props;
    const { personalInformation, education, workExperience } =
      applicantInformation;

    return (
      <section>
        <h3>Personal Information</h3>
        <article className={styles['information-container']}>
          <h4>Name</h4>
          <p>{personalInformation.name}</p>
          <h4>Phone Number</h4>
          <p>{personalInformation.phoneNumber}</p>
          <h4>Email</h4>
          <p>{personalInformation.email}</p>
          <h4>Address</h4>
          <p>{personalInformation.address}</p>
        </article>
        <h3>Education</h3>
        {education.map((x) => (
          <article key={x.id} className={styles['information-container']}>
            <h4>University</h4>
            <p>{x.university}</p>
            <h4>Degree Name</h4>
            <p>{x.degreeName}</p>
            <h4>Start Date</h4>
            <p>{x.startDate}</p>
            <h4>End Date</h4>
            <p>{x.endDate}</p>
          </article>
        ))}
        <h3>Work Experience</h3>
        {workExperience.map((x) => (
          <article key={x.id} className={styles['information-container']}>
            <h4>Company</h4>
            <p>{x.company}</p>
            <h4>Position</h4>
            <p>{x.position}</p>
            <h4>Start Date</h4>
            <p>{x.startDate}</p>
            <h4>End Date</h4>
            <p>{x.endDate}</p>
            <h4>Description</h4>
            <p>{x.description}</p>
          </article>
        ))}
      </section>
    );
  }
}

ReviewSection.defaultProps = {
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

ReviewSection.propTypes = {
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

export default ReviewSection;
