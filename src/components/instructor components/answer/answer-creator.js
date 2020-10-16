import React, {useState, useEffect} from "react";
import sampleProblem from '../../../backend/sample-problems';
/* need to allow for different answer types*/

export default function AnswerCreator(){
    const [selection, setSelection] = useState('radio'); //selection is either: radio, checkbox, text, file
    
    return(
            <div id="answer-creator">
                <nav id="answer-type-buttons">
                    <button> text </button>
                    <button> radio </button>
                    <button> check</button>
                    <button> file </button>
                </nav>
            </div>
    )
}