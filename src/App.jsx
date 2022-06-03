import React from 'react';
import styles from './styles/app.module.css';
import Header from './components/header';

function App() {
  return (
    <div className={styles.app}>
      <Header textContent="Job Application Submission" />
      <main className={styles.main}>
        <section className={styles.section}>sample text</section>
      </main>
    </div>
  );
}

export default App;
