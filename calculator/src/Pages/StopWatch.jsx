/* eslint-disable no-unused-vars */
import React from "react";

function StopWatch() {
    return (
        <div className="flex justify-center items-center w-full  h-screen">
            <div className=" gap-3 flex-col flex w-[300px] item-center bg-cyan-400 p-10 rounded "> 
                <div className="bg-white px-2 py-3 text-center font-bold text-cyan-400 rounded-lg">00:00:00:00</div>
                <div className="bg-white">StopWatch</div>
             </div>
        </div>
    )
}

export default StopWatch