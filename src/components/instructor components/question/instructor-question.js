import React, {useState, useEffect} from "react";
import sampleProblem from '../../../backend/sample-problems';


export default function InstructorQuestion({ updateInput }){
    const [question, setQuestion] = useState(sampleProblem.text)

    return(
        <>
            <form>
                <textarea 
                    id="question" 
                    name="question" 
                    rows="25" 
                    cols="50" 
                    value ={question}
                    onChange={event => {
                        updateInput(event.target.value);
                        setQuestion(event.target.value)
                        }
                    }
                />
            </form>
        </>
    )
}