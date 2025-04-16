import { useState } from 'react'


const Button = (fb) => (
  <button onClick={fb.onClick}>{fb.text} </button>
)

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = props.all

  const neutralfb = neutral * 0
  const badfb = bad * -1


  const avg = (good + neutralfb + badfb) / all
  const positiveP = good / all * 100 + "%"

  const StatisticLine = (props) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {props.text}: {props.value}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }


  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>

      </div>
    )
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={positiveP} />

      </div>

    )
  }
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const goodfb = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const neutralfb = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const badfb = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }





  return (
    <div>

      <h1>Give feedback</h1>

      <Button onClick={goodfb} text="good" />
      <Button onClick={neutralfb} text="neutral" />
      <Button onClick={badfb} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />


    </div>
  )
}

export default App