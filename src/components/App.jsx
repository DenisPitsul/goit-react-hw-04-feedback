import React, { useEffect, useMemo, useState } from "react"
import FeetbackOptions from "./FeetbackOptions/FeetbackOptions"
import Statistics from "./Statistics/Statistics"
import Section from "./Section/Section"
import Notification from "./Notification/Notification"

const varToString = varObj => Object.keys(varObj)[0]

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);

  useEffect(() => {
    setTotalFeedback(good + neutral + bad);
  }, [good, neutral, bad])

  const positiveFeedbackPercentage = useMemo(() => {
    return (Math.round((good / totalFeedback) * 100));
  }, [totalFeedback, good])

  const onLeaveFeedback = (option) => {
    if(varToString({ good }) === option) {
      setGood(good + 1)
    } else if (varToString({ neutral }) === option) {
      setNeutral(neutral + 1)
    } else if (varToString({ bad }) === option) {
      setBad(bad + 1)
    }
  }

  return (
    <div
      style={{
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Section title='Please leave your feetback'>
        <FeetbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
      </Section>
      <Section title='Statistics'>
        {
          totalFeedback === 0
          ?
          <Notification message='No given feedbacks'/>
          :
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        }
      </Section>
    </div>
  );
};

export default App;