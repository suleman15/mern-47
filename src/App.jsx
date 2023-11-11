import { useState } from 'react'
import './App.css'

function App() {
  const [friends, setFriends] = useState([])
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <div className="container">
        <div className="friends">
          <div className="header">Friend's List</div>
          <ol className="friends_list">{
            friends.map(friend => {
              return (<li>{friend}</li>)
            })
          }</ol>
        </div>

        <div className="input_fields">

          <input type="text" name="fr_name" id="fr_name" onChange={(e) => {
            setInputValue(e.target.value)
          }} value={inputValue}  />
          
          <button onClick={() => {
            setInputValue("")
          }}>RESET</button>
          
          <button onClick={() => {
            if(inputValue == "") {
              alert("INPUT FIELD CAN\"T BE EMPTY")
            } else {           
              if( friends.every(e => e != inputValue)) {
                let allFriends = [...friends]
                allFriends.push(inputValue)
                setFriends(allFriends)
              } else {
                alert(`${inputValue} is also being added`)
              }
              setInputValue("")
            }
          }}>Save</button>
          
        </div>
      </div>
      
    </>
  )
}

export default App
