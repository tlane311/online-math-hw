import React, {useEffect, useState} from "react";
//import sampleProblem from '../../../backend/sample-problems';
/* need to allow for different answer types*/

export default function AnswerViewer({ data }){
    //const [answerType, setAnswerType] = useState("radio")
    //const [answerData, setAnswerData] = useState(data);

    
    return (
        <>
            <RadioViewer
                data={data}
            />
        </>
    )

}

function RadioViewer({ data }){
    const [selectedRadio, setSelectedRadio] = useState(0);
    const [message, setMessage] = useState("Click Submit to check your answer")

    const handleRadioOnChange = (event) => {
        const newCheck = +event.target.value;
        setSelectedRadio(newCheck);
    }

    const handleSubmitAnswer = () =>{
        console.log(selectedRadio === data[1])
        if (selectedRadio === data[1]) {setMessage('Correct Answer');}
        else {setMessage('Incorrect :(');}
    }

    return(
        <>
        <form id="answer-preview-form">
            <ul>
                {data[0].map( (ele,index) => {
                    return(
                        <li key={"answer-preview-"+index}>  
                            <input 
                                type="radio" 
                                name="radio-preview" 
                                value={index} 
                                id={"radioChoiceView"+index}
                                checked={index===selectedRadio}
                                onChange={handleRadioOnChange }
                            />
                            <label htmlFor={"radioChoiceView"+index}>{ele}</label>
                            <br></br>
                        </li>
                    )
                })}
            </ul>
            
        <button type="button" onClick={handleSubmitAnswer}> Submit Answer </button>
        </form>
        <p>{message}</p>
        </>
    )
}
/*
function TextViewer({ data }){
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
*/