import { useState } from 'react'

const Button = (prop) => (
  <button onClick={prop.onClick}>{prop.text}</button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))




  const random = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log("select", selected)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(copy)
  }

  function getHighest() {
    let highestVotes = 0
    let highestIndex = 0
  
    votes.forEach((voteCount, index) => {
      if (voteCount > highestVotes) {
        highestVotes = voteCount
        highestIndex = index
      }
    })
  
    return anecdotes[highestIndex]
  }
  

  return (
    <div>
      {anecdotes[selected]}

      <div>
        <Button onClick={vote} text="Vote" />
        <Button onClick={random} text="Next anecdote" />
      </div>
      <div>
        {getHighest()}
      </div>
    </div>
  )
}

export default App