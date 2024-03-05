import { useEffect } from "react";
import React, { useState } from 'react';

function UseEffect() {


    let [age, setAge] = useState(19)
    let [sib, setSib] = useState(3)

    useEffect(() => {
        alert(`something changed ${age}`)
    },[age])


    return (
        <div>
            <h2>{age}</h2>
            <h2>{sib}</h2>

            <button onClick={()=> {setAge(age = age + 1)}}></button>
            <button onClick={() => {setSib(sib = sib + 1)}}></button>
        </div>
    );
}

export default UseEffect;