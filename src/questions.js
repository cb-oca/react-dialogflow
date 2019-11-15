import React from 'react';
import ReactDom from 'react-dom';
// import {ApiAiClient} from 'api-ai-javascript';
// import {applyMiddleware, createStore} from 'redux';
// const accessToken = 'b9410acf93b3497c9691627588fd6921';
// const client = new ApiAiClient({accessToken});
import styles from './Questions.module.scss';

class Questions extends React.Component {

  render() {
    return(
      <div className={styles.questions}>
        <h6>Suggested Questions</h6>
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