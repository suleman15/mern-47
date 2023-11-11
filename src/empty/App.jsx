import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [number, setNumber] = useState(0)
  let [history, setHistory] = useState([])
  // let increment = () => setNumber(number + 1)
  // let reset = () => setNumber(0)
  
  let increment_timeLap = () => {
    setNumber(number + 1)
    historyPush()
  }
  let reset = () => {
    setNumber(0)
    number == 0 ? undefined:historyPush()
  }
  let historyPush = () => {
    let oldHistory = [...history];
    history.push({date: new Date(), count: number})
  }
  return (
    <>
      
      <div className="container">
        Header
        <div className="timeLapHistory">
          {history.map(firstItem => {
            return (
              <div className='lapItem'>
                <div className="time"><b>Time ::</b>          
                <span className="hour"> {firstItem.date.getHours()} </span>:
                <span className="sec"> {firstItem.date.getSeconds()} </span>:
                <span className="min"> {firstItem.date.getMinutes()} </span>     
              </div>
              <div className="num"><b>Count:</b> {firstItem.count}</div>
              </div>

            )
          })}
        </div>
        {/* <button onClick={increment}>{number}</button>
        <button onClick={reset}>RESET</button> */}
        <div className="btn">
          <button onClick={increment_timeLap}>{number}</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  )
}

export default App
