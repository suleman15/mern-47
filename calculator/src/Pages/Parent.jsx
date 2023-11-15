import React from 'react'

export default function Parent(props) {
  return (
    <React.Fragment>
        <p className='text-center text-2xl'>I am the Parent Class</p>
        {props.children}
        <p className='text-center'>I am the Parent Class</p>

    </React.Fragment>
  )
}
