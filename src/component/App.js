import React, { useEffect, useState } from "react";

// Importing sass styles i
import '../styles.scss';


// initialize counter state to 0
const App =() => {
    const [counter, setCounter] = useState(0)
   
    // useEffect(() => {
    //     // create a interval and get the id
    //     const handleClick1 = setInterval(() => {
    //       setCounter((prevTime) => prevTime + 1);
    //     }, 1000);
    //     // clear out the interval using the id when unmounting the component
    //     // return () => clearInterval(handleClick1);
    // }, []);
    

    // increment on 'increment-button' click
    const handleClick1 = () => {
        setCounter(counter + 1);
    }

    // decrement on 'decrement-button' click
    const handleClick2 = () => {
        setCounter(counter - 1);
    }


    return(
        <div className="centeredItem">
            <div className="title">A counter App</div>
            <div className="counterTime"> {counter} </div>
            <div className="mybtn">
                <button class="button-1" role="button" onClick={handleClick1}>Increment</button>
                <button class="button-2" role="button" onClick={handleClick2}>Decrement</button>
            </div>
            <div className="text"> This is a basic react app that demonstrates Hot Module Replacement concept
             For example, you can change css property of any element on the page as a single module without
             affecting the counter</div>
        </div>
    )

}
export default App;
