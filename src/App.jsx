import React, { Component } from 'react';
import uniqid from 'uniqid';
import styles from './styles/app.module.css';
import Header from './components/header';
import Footer from './components/footer';
import InformationForm from './components/informationForm';
import ReviewSection from './components/reviewSection';
import SubmittedParagraph from './components/submittedParagraph';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'My Information',
      applicantInformation: {
        personalInformation: {
          name: 'John Smith',
          phoneNumber: '123-456-789',
          email: 'example@gmail.com',
          address: '1234-56 St, Canada',
        },
        education: [
          {
            id: uniqid(),
            university: 'University of Alberta',
            degreeName: 'BSc in Engineering',
            startDate: 'May 3, 2021',
            endDate: 'Aug 10, 2022',
          },
          {
            id: uniqid(),
            university: 'University of Calgary',
            degreeName: 'MSc in Engineering',
            startDate: 'May 3, 2023',
            endDate: 'Aug 10, 2025',
          },
        ],
        workExperience: [
          {
            id: uniqid(),
            company: 'Google',
            position: 'Software Engineer I',
            startDate: 'May 3, 2021',
            endDate: 'Aug 10, 2022',
            description: 'Did stuff',
          },
          {
            id: uniqid(),
            company: 'Amazon',
            position: 'Software Engineer II',
            startDate: 'May 3, 2023',
            endDate: 'Aug 10, 2025',
            description: 'Did stuff',
          },
        ],
      },
    };
  }

  render() {
    const { page, applicantInformation } = this.state;

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
              <Footer page={page} />
            ) : null}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
