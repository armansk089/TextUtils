import React,{useState} from "react"

export default function Textform(props) {
    const handleUpclick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","Success");
    }
    const handleLoclick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","Success");
    }
    const handleClearclick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared","Success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","Success");
    }
    const handleExtraspace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspace Removed","Success");
    }
    const handleOnchange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'dark':'light'}} onChange={handleOnchange} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-3 my-2" onClick={handleUpclick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleLoclick}>Convert lowercase</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleExtraspace}>Extraspace Remover</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleClearclick}>Clear text</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy text</button>
           

        </div>
        <div className="container my-3">
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}