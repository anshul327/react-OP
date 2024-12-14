import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    //useParams to catch the parameter from address (https....)
    const {userId}= useParams()
    return(
        <div className="flex justify-center text-3xl text-white p-4 bg-gray-600">User : {userId}</div>
    )
}