import React, {useState} from 'react';
import Question from './question/instructor-question.js'
import Preview from './previewer/previewer.js'
import AnswerViewer from './answer/answer-viewer.js'
import AnswerCreator from './answer/answer-creator.js'

import "../../styles/instructor.css";

export default function InstructorProblemCreator(){
    const [question, setQuestion] = useState("");
    const [answerType, setAnswerType] = useState("radio");
    const [answerData, setAnswerData] = useState([["",""],0]);

    return(
        <div id="problem-creator">
            <h2> Problem Creator </h2>
            <Question
                updateInput={setQuestion}
            />
            <AnswerCreator
                updateType={setAnswerType}
                updateData={setAnswerData}
            />
            <Preview
                question={ question || "placeholder text"}
            />
            <AnswerViewer
                type={answerType}
                data={answerData}
            />
        </div>
    )
}