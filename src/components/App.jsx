import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const OPTIONS = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = evt => {
    const option = evt.target.textContent;

    this.setState(prevState => ({
      ...prevState,
      [option]: (prevState[option] ?? 0) + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;

    return (
      (((good + neutral) / this.countTotalFeedback()) * 100).toFixed(1) + '%'
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      clickHandler,
    } = this;

    return (
      <div style={{ paddingLeft: '20px' }}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={OPTIONS} onLeaveFeedback={clickHandler} />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
