import React, { useState } from "react";
import {Link} from "react-router-dom"

function Input ({placeholder, id, labelName}) {
  return (
    <>  <label className="text-white p-3"  htmlFor={id}>{labelName} </label>
    <input type="text" className="p-3 rounded" placeholder={placeholder} id={id}  required/></>
  )

}

function App() {
  return (
   <>
  <div className="container flex justify-center bg-black w-[100%] h-screen items-center">
  <form className="flex flex-col bg-[dodgerblue] p-10 rounded-md w-[600px]   " onSubmit={(e) => {
      e.preventDefault()
    }}>

    <div className="text-center text-2xl text-white font-bold ">CONTACT US</div>

      <Input placeholder='USER' id="userName" labelName="User: "/>
      <Input placeholder='USER EMAIL' id="Email" labelName="Email: "/>

      <label htmlFor="textField " className="text-white p-3 ">Message: </label>
      <textarea className="min-h-[300px] p-3 rounded" placeholder="MESSAGE" id="textField" required/>
      <input type="submit" value="Submit" className="hover:bg-[#325374]  hover:text-white bg-white my-3 p-3 rounded-md" />
    </form>
    
  </div>
   </>
  );
}
export default App
