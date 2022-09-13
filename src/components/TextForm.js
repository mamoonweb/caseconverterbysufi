import React , {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props) {
  
  const handleOnChange = (event)=>{
    setText(event.target.value);    
  }

  const handleUpChange = ()=>{
    let newText = text.toUpperCase();
    toast("Converted to UpperCase");
    setText(newText);
  }
  {/* UpperCase */}
  
  const handleLoChange = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    toast("Converted to LowerCase");
  }
  {/* lowercase */}


  const handleClearText = ()=>{
    let newText = '';
    setText(newText);
    toast("Clear Text");

  }
  {/* Clear */}

  const toTitleCase = () => {
    let wordsArray = text.split(" ");
    let newText = wordsArray
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      })
      .join(" ");
    setText(newText);
    toast("Convertad to Captialize Case");
  }
  {/* Captialize */}
  
  const toAlternatCase = () => {
    let newText = text
      .split("")
      .map((word, index) => {
        if (index % 2 === 0) {
          return word.toLowerCase();
        } else {
          return word.toUpperCase();
        }
      })
      .join("");

    setText(newText)
    toast("Convertad to Alternat Case");
  }
  {/* Sentences */}

  const handleRevClick = ()=>{
      let newText = text.split("").reverse().join("");
      setText(newText);
    toast("Convertad to Reverse Case")

  }
  {/* Reverse */}

  const handelCopyClick = ()=> {
    navigator.clipboard.writeText(text);
    toast("Copy text")
  }
  
  {/* Copy */}

  const downloadTextFile = () =>{
    const element = document.currentElement('a');
    const file = new Blob([document.getElementById('mybox').value],{
      type:'text/plain;charset=utf-8'
    });

    element.href = URL.createObjectURL(file);
    element.download = 'NewDocument.txt';
    document.body.appendChild(element);
    element.click();
    toast("Downloaded")
    }

    function downloadText(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
    
      element.style.display = 'none';
      document.body.appendChild(element);
    
      element.click();
    
      document.body.removeChild(element);
    }
    
    const downloadBtn = () =>{
      downloadText("text.txt", text)
    }



  const [text, setText] = useState('');
  return (
    <>
      <div className='container case-div' style={{color :props.mode==='dark'?'white':'black'}} >
      <h1 className='case-head'>{props.heading}</h1>
      <div className="form-group">
         <textarea className="form-control"  value={text} placeholder="Enter text here" style={{backgroundColor: props.mode==='dark'?'#343a40':'white' , color :props.mode==='dark'?'white':'black' , placeholder : props.mode==='dark'?'white':'black' }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <div className='buttons mt-3'>
          <button type="button" onClick={handleUpChange} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
          {/* UpperCase */}
          <button type="button" onClick={handleLoChange} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
          {/* lowercase */}
          <button type="button" onClick={toTitleCase} className="btn btn-primary mx-1 my-1">Convert to Capitalize Case</button>
          {/* Capitalize */}
          <button type="button" onClick={toAlternatCase} className="btn btn-primary mx-1 my-1">Convert to Alternate Case</button>
          {/* Sentences */}
          <button type="button" onClick={handleRevClick} className="btn btn-primary mx-1 my-1">Reverse Case</button>
          {/* Reverse */}
          <abbr title="Download Text" ><button type="button"  onClick={downloadBtn} className="btn btn-info mx-1 my-1 info-icon "><i className="fa fa-download" aria-hidden="true"></i></button></abbr> 
          {/* download */}
          <abbr title="Copy Text" ><button type="button" onClick={handelCopyClick} className="btn btn-success mx-1 my-1 copy-icon "><i className="fa fa-files-o" aria-hidden="true"></i></button></abbr> 
          {/* Copy */}
          <abbr title="Clear Text" ><button type="button" onClick={handleClearText} className="btn btn-danger mx-1 my-1 trash-icon "><i className="fa fa-trash" aria-hidden="true"></i></button></abbr>
          {/* Clear */}
        </div>
      </div>

    <div className="my-3">
      <h2 className='case-head'>Your text Summary</h2>
      <p><b>{text.length==" "?0:text.split(' ').length}</b> Words and <b>{text.length}</b> Characters</p>
      <h2 className='mt-3 case-head-2'>Preview</h2>
      <p>{text.length>0?text:'Enter something in the textbox above to preview here!!'}</p>
      {/* <details>
        <summary><b className='mt-3'>Preview</b></summary>
        <p>{text.length>0?text:'Enter something in the textbox above to preview here!!'}</p>
    </details> */}
    </div>
    <ToastContainer
      position="bottom-center"
      autoClose={300}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      />
    </div>

    </>
  )
}