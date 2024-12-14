import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData() //using loader (main.jsx) to increase efficiency

    //not using loader
    // const [data, setData] = useState([])
    // we can also use useEffect if we want to do something at first loading or refresh, then it donot need any dependencies
    // useEffect( ()=> {
    //     fetch('https://api.github.com/users/anshul327')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    return(
        <>
            <div className="text-center m-4 bg-gray-500 text-white ">
               <div className="p-4 text-2xl">Github Followers:  {data.followers}</div>
               <div className="flex justify-center">
               <img src={data.avatar_url} alt="Git Pic" /></div>
            </div>
        </>
    )
}

//better to write following fn in different file
export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anshul327')
    return response
}