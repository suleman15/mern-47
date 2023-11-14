import React, { useState } from 'react'




export default function Home() {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [answer, setAnswer] = useState("")
    function handler(e) {
        let [n1, n2] = [Number(num1)  ,Number(num2)]
        console.log(num1.charCodeAt(num1[num1.length -1]) >= 48 && num2.charCodeAt(num2[num2.length -1]) <= 57);
        if (e.target.value == "+")setAnswer(n1  + n2)
        else if (e.target.value == "-")setAnswer(n1  - n2)
        else if (e.target.value == "*")setAnswer(n1  * n2)
        else if (e.target.value == "/")setAnswer(n1  / n2)
        else if (e.target.value == "SQR")setAnswer(n1  ** n2)

    }
  return (
    <div className="h-screen w-full flex items-center justify-center" >
        <form className='w-[400px] bg-[#1091e7] gap-3 flex flex-col p-4 rounded-xl' onSubmit={e => e.preventDefault()}>
            <div className="text-center text-white font-bold">CALCULATOR</div>
            <input className=' p-3 rounded bg-gray-900'type="number" placeholder='Number 1' value={num1} onChange={e=> {
                let newInput = e.target.value
                // (newInput.charCodeAt(newInput[newInput.length - 1]) >= 48) && (newInput.charCodeAt(newInput[newInput.length - 1]) <= 57) && setNum1(newInput) 
                console.log(  (newInput.charCodeAt(newInput[newInput.length - 1]) >= 48) );
                // console.log(newInput.charCodeAt(newInput[newInput.length - 1]) >=48);
                setNum1(newInput) 
            }}/>
            <input className='p-3 rounded' type="number" placeholder='Number 2' value={num2} onChange={e=> {
                setNum2(e.target.value)
            }}/>
            <div className="flex gap-2 justify-center bold">
                <input type='submit' className='bg-white p-2 rounded cursor-pointer'  value='+' onClick={handler} />
                <input className='bg-white p-2 rounded cursor-pointer' type='submit' value='-'onClick={handler} />
                <input className='bg-white p-2 rounded cursor-pointer'  type='submit' value='*'onClick={handler} />
                <input  className='bg-white p-2 rounded cursor-pointer' type='submit' value='+' onClick={handler} />
                <input  className='bg-white p-2 rounded cursor-pointer' type='submit' value='SQR'onClick={handler} />
            </div>
            <div className="h-9 flex justify-center item-center text-bold bg-white">{answer}</div>
        </form>
    </div>
  )
}
