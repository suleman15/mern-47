import React, { useState } from "react";
import {Link} from "react-router-dom"
import Swal from "sweetalert2"


function App() {
  const [userName, setUserName] = useState("dfsafsd")
  const [userEmail, setUserEmail] = useState("")
  const [textArea, setTextArea] = useState("")
  



  return (
   <>
  <div className="container flex justify-center bg-black w-[100%] h-screen items-center">
  <form className="flex flex-col bg-[dodgerblue] p-10 rounded-md w-[600px]   " onSubmit={(e) => {
      e.preventDefault()
      Swal.fire("Submited", `user: ${userName}, email: ${userEmail}, message: ${textArea}`)
    }}>

    <div className="text-center text-2xl text-white font-bold ">CONTACT US</div>
    <label className="text-white p-3"  htmlFor='userName'>USER :  </label>
      <input type="text" className="p-3 rounded  text-gray-500 focus:text-gray-900"   placeholder='USER NAME' id='userName' value={userName} onChange={(e) => setUserName(e.target.value)}  required/>
    <label className="text-white p-3"  htmlFor='userEmail'>EMAIL :  </label>
      <input type="text" className="p-3 rounded  text-gray-500 focus:text-gray-900"   placeholder='USER Email' id='userEmail' value ={userEmail} onChange={(e) => setUserEmail(e.target.value)}  required/>
      <label htmlFor='userMessage' className="text-white p-3 ">Message :</label>
        <textarea className="min-h-[300px] p-3 rounded text-gray-500 focus:text-gray-900" placeholder='Message' id='userMessage' required value={textArea} onChange={e => setTextArea(e.target.value)}/>
      <input type="submit" value="Submit" className="hover:bg-[#325374]  hover:text-white bg-white my-3 p-3 rounded-md" />
    </form>
    
  </div>
   </>
  );
}
export default App
