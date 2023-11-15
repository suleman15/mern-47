import React from 'react'
import Parent from './Parent'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

export default function ParentPage() {
  return (
    <React.Fragment>
        <h1 className='text-center'>I am the Parent Page</h1>
        <Parent >
          <Child1 />
          <Child2 />
          <Child3 />
           </Parent>
    </React.Fragment>
  )
}
