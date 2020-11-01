import React, {useState, useEffect} from "react";
//import sampleProblem from '../../../backend/sample-problems';
/* need to allow for different answer types*/

export default function AnswerCreator({ updateType, updateData }){
    const [selection, setSelection] = useState('radio'); //selection is either: radio, checkbox, text, file
    //const [form, setForm] = useState(""); 


    /*useEffect( () => {
        updateType(selection);
    }, [selection])*/
    
    return(
            <div id="answer-creator">
                <nav id="answer-type-buttons">
                    <button onClick={() => setSelection("text")}> text </button>
                    <button onClick={() => setSelection("radio")}> radio </button>
                    <button onClick={() => setSelection("check")}> check</button>
                    <button onClick={() => setSelection("file")}> file </button>
                </nav>
                <Radio
                    updateData ={ updateData }
                />
                {selection ? null : null}
            </div>
    )
}

function Radio({ updateData }) {
    const [radioCount, setRadioCount]= useState(2);
    const [checkedRadio, setCheckedRadio] = useState(0)
    const [answerData, setAnswerData]=useState(["",""]);

    const handleInputOnChange= (event) => {
        const inputName = event.target.name;
        const inputNumber = +inputName.slice(11); //coercing this string to be a number
        const inputValue = event.target.value;
        

        const oldAnswerData = JSON.parse(JSON.stringify(answerData));
        oldAnswerData[inputNumber] = inputValue;
        setAnswerData(oldAnswerData);
    }

    const handleRadioOnChange = (event) => {
        const newCheck = +event.target.value
        setCheckedRadio(newCheck);
    }

    useEffect( () => {        
        const oldAnswerData = JSON.parse(JSON.stringify(answerData));
        
        if (oldAnswerData.length < radioCount){
            setAnswerData(oldAnswerData.concat(""));
        }
        if (oldAnswerData.length > radioCount){
            setAnswerData(oldAnswerData.slice(0,radioCount));
        }
    },[radioCount,answerData]);

    useEffect( () => {
        updateData([answerData,checkedRadio])
    },[answerData,checkedRadio,updateData]);

    return(
        <>
            <form id="answer-creator-form">
                <ul>
                {Array(radioCount).fill(null).map( (ele,index) => {
                    return(
                            <li key={"answer-creator-"+index}>
                                <input 
                                    type="radio" 
                                    name="radio" 
                                    value={index}
                                    checked={index===checkedRadio}
                                    onChange={handleRadioOnChange }
                                />
                                <input 
                                    type="text" 
                                    name={"radio-text-"+index} 
                                    placeholder="answers go here" 
                                    onChange={handleInputOnChange}    
                                    />
                            </li>
                    )
                })}
                </ul>
                <button> Create Answer </button>
            </form>
            <button onClick={() => {
                if (radioCount<11) setRadioCount(radioCount+1);
            }}>Add</button>
            <button onClick={() => {
                if (radioCount>2) setRadioCount(radioCount-1)
            }}>Subtract</button>
            
        </>
    ) 
}