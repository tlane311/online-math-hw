import React, {useState, useEffect} from "react";
import sampleProblem from '../../../backend/sample-problems';
/* need to allow for different answer types*/

export default function Answer(){

    return(
        <>
            <form action="">
                <label> Answer: </label>
                <input 
                    id="answer" 
                    name="answer" 
                    type="text"
                    onChange={event => {}}
                />
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}