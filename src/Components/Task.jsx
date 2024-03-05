import React, { useState } from 'react';
import Content from './Content'

function Task(){
    let [num, setNum] = useState(0)
    let [showContent, setShowContent] = useState(false);

    const Addnum = () => { 
        setNum(num + 1)
    }

    const toggleContent = () => {
        alert('Content button clicked')
        setShowContent(!showContent);
    }

    return (
        <>
        
        <div className='div'>
            {showContent && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
            <button onClick={toggleContent}>
                Content
            </button>

            <p>{num}</p>
            <button onClick={Addnum}>Like</button> 
        </div>
        </>
 
    );
};

export default Task;
