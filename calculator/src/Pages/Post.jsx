import React, {useEffect, useState} from "react";
import axios from "axios"

function Post() {
    const [post, setPost] = useState([])

    async function fetchPost () {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(result => setPost(result.data)).catch(error => console.log(error))
    }
    useEffect(() => console.log(post), [post])
    return (
        <div className="flex flex-col">

 <button onClick={fetchPost} className="bg-gray-900 text-white p-[20px] my-3 ">Get All The Data</button>
        <div className="flex flex-col gap-6 px-[10px]">{post.map(item => {
            return(
                <div className=" border-1 border-black bg-[dodgerblue] text-white p-3 rounded-lg">
                <div>{item?.id}</div>
                <div>{item?.title}</div>
                <div>{item?.body}</div>
                </div>
            )
        })}</div>
        </div>
    )
}

export default Post;