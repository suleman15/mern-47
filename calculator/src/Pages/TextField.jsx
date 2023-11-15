/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function TextField() {
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        <label htmlFor="password">Password: </label>
        <input type={toggle ? "text" : "password"}   />
        <input type="button" value={!toggle ? "Show" : "Hide" } onClick={() => setToggle(!toggle)} />
    </div>
  )
}

export default TextField