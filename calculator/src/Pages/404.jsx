import React from 'react'
import Lottie from 'react-lottie';
import animationData from "./../lotties/animated.json"
export default function NotFound() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    // return (
    //   <div>
    //     <Lottie 
    //       options={defaultOptions}
    //       height={400}
    //       width={400}
    //     />
    //   </div>
  return (
          <div className='w-full h-screen  flex '>
        <Lottie 
          options={defaultOptions}
          height={600}
          width={1000}
        />
      </div>
  )
}
