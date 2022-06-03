import React from 'react';
import styles from './styles/app.module.css';
import Header from './components/header';
import Footer from './components/footer';
// import InformationForm from './components/informationForm';
// import ReviewSection from './components/reviewSection';
import SubmittedParagraph from './components/submittedParagraph';

function App() {
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
              {/* <InformationForm /> */}
              {/* <ReviewSection /> */}
              <SubmittedParagraph />
            </div>
          </article>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
