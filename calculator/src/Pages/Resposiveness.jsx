export default function Responsiveness () {
    return (
        <div className="flex gap-3  p-12 flex-col">
            <div className="flex gap-3 lg:flex-row flex-col">
                <div className=" h-[100px]  rounded-lg  w-full bg-[dodgerblue] "></div>
                <div className=" h-[100px]  rounded-lg  w-full bg-[dodgerblue] "></div>
            </div>
            <div className="w-full bg-red-900 h-[150] p-12 rounded-lg "></div>
            <div className="flex gap-3 lg:flex-row flex-col">
                <div className=" h-[200px]  rounded-lg  w-full bg-[#f8993a] "></div>
                <div className=" h-[200px]  rounded-lg  w-full bg-[#f8993a] "></div>
                <div className=" h-[200px]  rounded-lg  w-full bg-[#f8993a] "></div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center ">
                <div className=" h-[200px]  rounded-lg py-12 lg:w-[calc(25%-9px)] w-[100%] md:w-[calc(50%-8px)]   bg-[#e3f544] "></div>
                <div className=" h-[200px]  rounded-lg py-12 lg:w-[calc(25%-9px)] w-[100%] md:w-[calc(50%-8px)]   bg-[#e3f544] "></div>
                <div className=" h-[200px]  rounded-lg py-12 lg:w-[calc(25%-9px)] w-[100%] md:w-[calc(50%-8px)]   bg-[#e3f544] "></div>
                <div className=" h-[200px]  rounded-lg py-12 lg:w-[calc(25%-9px)] w-[100%] md:w-[calc(50%-8px)]   bg-[#e3f544] "></div>
            </div>
        </div>
    )
}