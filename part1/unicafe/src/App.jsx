import { useState } from 'react'

const Button = (props) => {
  console.log(props)
  const {handleClick, text} = props
  return(
    <button onClick = {handleClick}>{text}</button>
  )
}
const Statistics = (props) => {
  const {good, bad, neutral} = props
  const average = (good + (-bad)) / 3
  const pospercent = (good / (neutral + bad)) * 100 
  const total = good + bad + neutral
  if (good == 0 & bad == 0 & neutral == 0){
    return(
      <>
      <h2>statistics</h2>
      <p>No feedback given</p>
      </>
    )
  }
  else{
    return(
      <>
      <h2>statistics</h2>
      <StatisticLine text = "good" value = {good}/>
      <StatisticLine text = "neutral" value = {neutral}/>
      <StatisticLine text = "bad" value = {bad}/>
      <StatisticLine text = "average" value = {average}/>
      <StatisticLine text = "total" value = {total}/>
      <StatisticLine text = "positive percent" value = {pospercent}/>
      </>
    )
  } 
}
const StatisticLine = (props) => {
  const {text, value} = props
  return(
    <>
      <p>{text} {value}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  console.log("good" + good)
  console.log("neutral" + neutral)
  console.log("bad" + bad)
  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick = {() => setGood(good + 1)} text = "good"/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick = {() => setBad(bad + 1)} text = "bad"/>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </>
  )
}

export default App