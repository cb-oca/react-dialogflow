import React, {Component} from 'react';
import {connect} from 'react-redux';
import Questions from './questions';
import {sendMessage} from './chat';
import styles from './App.module.scss';

class App extends Component {
  render() {
    const {questions, feed, sendMessage} = this.props;

    console.log(questions);

    return(
      <div className={styles.container}>
        <h1>OCA Chat!</h1>
        <Questions />
        <ul>
          {feed.map((entry, index) => <li className={(entry.sender === 'bot' ? 'bot' : 'user')} key={index}>{entry.text}</li>)}
        </ul>
        <input type='text' onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  feed: state
})

export default connect(mapStateToProps, {sendMessage})(App);
