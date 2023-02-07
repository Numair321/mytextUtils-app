import React,{useState} from 'react'
 
export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Upper case was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper Case!","success");
    }
    const handleLoClick=()=>{
        //console.log("Upper case was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success");
    }
    const handleClear=()=>{
        //console.log("Upper case was clicked"+text);
        let newText=' ';
        setText(newText);
        props.showAlert("Clear word!","success");
    }
    const handleCapitalize=()=>{
        const NewText=text.charAt(0).toUpperCase() +text.slice(1);
        //console.log(lower.charAt(0).toUpperCase() +lower.slice(1));
        setText(NewText);
    }
    const handleOnchnage=(event)=>{
       // console.log("on chnage");
        setText(event.target.value);
    }
    const handleCopy=()=>{
       // console.log("I am copy");
       // var text=document.getElementById("myBox");
      //  text.select();
       // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy all word!","success");
    }  
    const handleExtraSpaces=()=>{
        let newText=text.trim().split(/ +/).join(' ');
        setText(newText)
        props.showAlert("Remove Extraspaces word!","success");
    }
const [text,setText]=useState('');
//text="new text";//wrong way to set text
//setText("new text"); // right way to set text

  return (
    <> 
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
    <h2 className='mb-3'>{props.heading} </h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchnage} style={{color:props.mode==='dark'?'black':'black' ,background:props.mode==='dark'?'white':'white'}} id="myBox" rows="8"></textarea>
  
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lower case</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
<button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1  " onClick={handleCapitalize}>Capitalize</button>
    
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}  >
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </div>
    </>
  )
}
  