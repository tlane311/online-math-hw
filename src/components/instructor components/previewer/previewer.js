import React from "react";
//import katex from 'katex';


export default function InstructorPreview(props){
    return(
        <>
            <div id="problem-preview">
                {props.question}
            </div>
        </>
    )
}