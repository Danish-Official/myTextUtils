import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText1= text.toUpperCase();
        setText(newText1);
        props.showalert('Converted to Upper Case','success');
    }
    const handleLoClick = () => {
        let newText2= text.toLowerCase();
        setText(newText2);
        props.showalert('Converted to Lower Case','success');
    }
    const handleClearClick = () => {
        setText(''); 
        props.showalert('Text Cleared!','success');
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showalert("Copied to Clipboard!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#3B3B3B':'white'}} id="myBox" rows="12"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h3>Preview</h3> 
                <p>{text.length>0?text:"Nothing to preview."}</p>
            </div>

        </div>
        
    )
}
