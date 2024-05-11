import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
  const [text, setText]= useState("");

  const handleClickUp = ()=>{
    let sit=text.toUpperCase();
    setText(sit);
    if(text!=='')
    props.alert("Text has been converted to uppercase","success");
  }
  const handleClickLo = ()=>{
    let sit=text.toLowerCase();
    setText(sit);
    if(text!=='')
      props.alert("Text has been converted to lowercase","success");
  }

  const handleClear = ()=>{
    setText("");
    if(text!=='')
      props.alert("Text cleared","success");
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    if(text!=='')
      props.alert("Text has been copied to clipboard","success");
  }
  const handleRemoveExtraSpace = ()=>{
    setText(text.split(/[ ]+/).join(" "));
    if(text!=='')
      props.alert("Extra sapces has been removed","success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  return (
    <>
    <div>
        <div className="mb-3 my-3">
            <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{props.textArea}</h1>
            <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleClickUp}>Convert to Upper case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleClickLo}>Convert to Lower case</button>
        <button className="btn btn-primary my-3" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h1>
      <p className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} words and {text.length} characters</p>
      <p className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{0.0032*text.split(" ").length}Minutes needed to read</p>
    </div>
    <div className="container my4">
      <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'}`} >Your Text Preview</h1>
      <p className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
    </div>
    </>
  )
}

Textform.prototypes={textArea: PropTypes.string.isRequired};

Textform.defaultProps= {textArea:'Enter text area description' };