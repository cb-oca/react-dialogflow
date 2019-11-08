import React from 'react';
import ReactDom from 'react-dom';
import styles from './Questions.module.scss';

class Questions extends React.Component {

  render() {
    return(
      <div className={styles.questions}>
        <h6>Choose a Question</h6>
        <ul className={styles.questions__list}>
          <li className={styles.questions__list_item}>What is the OCA's background?</li>
          <li className={styles.questions__list_item}>Give me some background to OCA?</li>
          <li className={styles.questions__list_item}>What can you tell me about OCA?</li>
          <li className={styles.questions__list_item}>What is the Open College of the Arts?</li>
          <li className={styles.questions__list_item}>What is OCA?</li>
          <li className={styles.questions__list_item}>Tell me about the Open College of the Arts</li>
          <li className={styles.questions__list_item}>Tell me about OCA</li>
        </ul>
      </div>
    )
  }

}

export default Questions;