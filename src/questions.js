import React from 'react';
import ReactDom from 'react-dom';
import styles from './Questions.module.scss';

class Questions extends React.Component {

  render() {
    return(
      <div className={styles.questions}>
        <h6>Choose a Question</h6>
        <ul>
          <li>What is the OCA's background?</li>
          <li>Give me some background to OCA?</li>
          <li>What can you tell me about OCA?</li>
          <li>What is the Open College of the Arts?</li>
          <li>What is OCA?</li>
          <li>Tell me about the Open College of the Arts</li>
          <li>Tell me about OCA</li>
        </ul>
      </div>
    )
  }

}

export default Questions;