import React, {useState, useEffect} from 'react';
import Question from './question/instructor-question.js'
import Preview from './previewer/previewer.js'
import Answer from './answer/answer.js'

import "../../styles/instructor.css";

export default function InstructorProblemCreator(){
    const [question, setQuestion] = useState("");


    return(
        <div id="problem-creator">
            <h2> Problem Creator </h2>
            <Question
                updateInput={input => setQuestion(input)}
            />
            <Preview
                question={ question || "placeholder text"}
            />
            <Answer />
        </div>
    )
}