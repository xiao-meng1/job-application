import React, { useState } from 'react';
import uniqid from 'uniqid';
import styles from './styles/app.module.css';
import Header from './components/header';
import Footer from './components/footer';
import InformationForm from './components/informationForm';
import ReviewSection from './components/reviewSection';
import SubmittedParagraph from './components/submittedParagraph';

function App() {
  const [page, setPage] = useState('My Information');
  const [applicantInformation, setApplicantInformation] = useState({
    personalInformation: {
      name: 'John Smith',
      phoneNumber: '123-456-789',
      email: 'example@gmail.com',
      address: '1234-56 St, Vancouver, Canada',
    },
    education: [
      {
        id: uniqid(),
        university: 'University of Alberta',
        degreeName: 'BSc in Engineering',
        startDate: 'May 3, 2017',
        endDate: 'Aug 10, 2022',
      },
      {
        id: uniqid(),
        university: 'University of Toronto',
        degreeName: 'MSc in Engineering',
        startDate: 'May 3, 2022',
        endDate: 'Aug 10, 2024',
      },
    ],
    workExperience: [
      {
        id: uniqid(),
        company: 'Google',
        position: 'Software Engineer I',
        startDate: 'June 3, 2024',
        endDate: 'Aug 10, 2026',
        description: 'Did stuff',
      },
      {
        id: uniqid(),
        company: 'Amazon',
        position: 'Software Engineer II',
        startDate: 'July 3, 2026',
        endDate: 'Aug 10, 2028',
        description: 'Did stuff',
      },
    ],
  });
  const updatePage = (e) => {
    let newPageName;

    switch (e.target.name) {
      case 'save and continue':
        newPageName = 'Review';
        break;
      case 'back':
        newPageName = 'My Information';
        break;
      case 'submit':
        newPageName = 'Submitted';
        break;
      default:
        newPageName = page;
    }

    setPage(newPageName);
  };

  const updateFormInput = (e) => {
    const applicantInformationClone = structuredClone(applicantInformation);
    const formFieldset = e.target.parentNode.name;
    let targetItemIndex;

    if (formFieldset === 'personalInformation') {
      applicantInformationClone[formFieldset][e.target.name] = e.target.value;
    } else if (
      formFieldset === 'education' ||
      formFieldset === 'workExperience'
    ) {
      targetItemIndex = applicantInformationClone[formFieldset].findIndex(
        (item) => item.id === e.target.parentNode.dataset.key
      );
      applicantInformationClone[formFieldset][targetItemIndex][e.target.name] =
        e.target.value;
    }

    setApplicantInformation(applicantInformationClone);
  };

  const addFormField = (e) => {
    const applicantInformationClone = structuredClone(applicantInformation);
    const formFieldset = e.target.parentNode.parentNode.name;
    const targetItemIndex = applicantInformationClone[formFieldset].findIndex(
      (item) => item.id === e.target.parentNode.parentNode.dataset.key
    );
    let newItem = {};

    if (formFieldset === 'education') {
      newItem = {
        id: uniqid(),
        university: '',
        degreeName: '',
        startDate: '',
        endDate: '',
      };
    } else if (formFieldset === 'workExperience') {
      newItem = {
        id: uniqid(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      };
    }

    applicantInformationClone[formFieldset].splice(
      targetItemIndex + 1,
      0,
      newItem
    );

    setApplicantInformation(applicantInformationClone);
  };

  const deleteFormField = (e) => {
    const applicantInformationClone = structuredClone(applicantInformation);
    const formFieldset = e.target.parentNode.parentNode.name;
    const targetItemIndex = applicantInformationClone[formFieldset].findIndex(
      (item) => item.id === e.target.parentNode.parentNode.dataset.key
    );

    applicantInformationClone[formFieldset].splice(targetItemIndex, 1);
    setApplicantInformation(applicantInformationClone);
  };

  return (
    <div className={styles.app}>
      <Header textContent="Job Application Submission" />
      <main className={styles.main}>
        <section className={styles.section}>
          <header>
            <h3 className={styles.h3}>Junior Software Developer</h3>
          </header>
          <article className={styles.article}>
            <h2 className={styles.h2}>My Information</h2>
            <div className={styles.container}>
              {(() => {
                switch (page) {
                  case 'My Information':
                    return (
                      <InformationForm
                        applicantInformation={applicantInformation}
                        updateFormInput={updateFormInput}
                        addFormField={addFormField}
                        deleteFormField={deleteFormField}
                      />
                    );
                  case 'Review':
                    return (
                      <ReviewSection
                        applicantInformation={applicantInformation}
                      />
                    );
                  case 'Submitted':
                    return <SubmittedParagraph />;
                  default:
                    return null;
                }
              })()}
            </div>
          </article>
          {page === 'My Information' || page === 'Review' ? (
            <Footer page={page} updatePage={updatePage} />
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
