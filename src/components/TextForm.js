// understanding state and handling events 
import React,{useState} from 'react'

export default function TextForm(prop) {
  //  how to use style tag in components 


  const allColorsStyle={
    height:"100px",
    width:"300px",
    borderStyle:"solid",
    marginTop:"10px",
    display:"flex",
    flexDirection:"wrap",
    flexWrap:"wrap"
  }  
  // colors css 
  const colorred={height:"20px",width:"20px",margin:"5px",backgroundColor:"red"}
  const colorgreen={height:"20px",width:"20px",margin:"5px",backgroundColor:"green"}
  const colorblue={height:"20px",width:"20px",margin:"5px",backgroundColor:"blue"}
  const colororange={height:"20px",width:"20px",margin:"5px",backgroundColor:"orange"}
  const colorpink={height:"20px",width:"20px",margin:"5px",backgroundColor:"pink"}
  const colorgrey={height:"20px",width:"20px",margin:"5px",backgroundColor:"grey"}
  const coloryellow={height:"20px",width:"20px",margin:"5px",backgroundColor:"yellow"}
  const colorbrown={height:"20px",width:"20px",margin:"5px",backgroundColor:"brown"}
  const colorgold={height:"20px",width:"20px",margin:"5px",backgroundColor:"gold"}
  const colorviolet={height:"20px",width:"20px",margin:"5px",backgroundColor:"violet"}
  const colorslateblue={height:"20px",width:"20px",margin:"5px",backgroundColor:"slateblue"}
  const colorindigo={height:"20px",width:"20px",margin:"5px",backgroundColor:"indigo"}
  const colorlime={height:"20px",width:"20px",margin:"5px",backgroundColor:"lime"}
  const colorseagreen={height:"20px",width:"20px",margin:"5px",backgroundColor:"seagreen"}
  const colorolive={height:"20px",width:"20px",margin:"5px",backgroundColor:"olive"}
  const colorteal={height:"20px",width:"20px",margin:"5px",backgroundColor:"steal"}
  const colorskyblue={height:"20px",width:"20px",margin:"5px",backgroundColor:"skyblue"}
  const colorchocolate={height:"20px",width:"20px",margin:"5px",backgroundColor:"chocolate"}
  // // colors functions 
  const colorredfun=()=>{
    console.log("red color")
    setColor({
      color:"green"
    })
  }
  const colorgreenfun=()=>{
    console.log("green")
    setColor({
      color:"green"
    })
  }
  const colorbluefun=()=>{
    console.log("blue")
    setColor({
      color:"blue"
    })
  }
  const colororangefun=()=>{
    console.log("orange")
    setColor({
      color:"orange"
    })
  }
  const colorpinkfun=()=>{
    console.log("pink")
    setColor({
      color:"pink"
    })
  }
  const colorgreyfun=()=>{
    console.log("grey")
    setColor({
      color:"grey"
    })
  }
  const coloryellowfun=()=>{
    console.log("yellow")
    setColor({
      color:"yellow"
    })
  }
  const colorbrownfun=()=>{
    console.log("brown")
    setColor({
      color:"brown"
    })
  }
  const colorgoldfun=()=>{
    console.log("gold")
    setColor({
      color:"gold"
    })
  }
  const colorvioletfun=()=>{
    console.log("violet")
    setColor({
      color:"violet"
    })
  }
  const colorslatebluefun=()=>{
    console.log("slateblue")
    setColor({
      color:"slateblue"
    })
  }
  const colorindigofun=()=>{
    console.log("indigo")
    setColor({
      color:"indigo"
    })
  }
  const colorlimefun=()=>{
    console.log("lime")
    setColor({
      color:"lime"
    })
  }
  const colorseagreenfun=()=>{
    console.log("seagreen")
    setColor({
      color:"seagreen"
    })
  }
  const colorolivefun=()=>{
    console.log("olive")
    setColor({
      color:"olive"
    })
  }
  const colortealfun=()=>{
    console.log("steal")
    setColor({
      color:"teal"
    })
  }
  const colorskybluefun=()=>{
    console.log("skyblue")
    setColor({
      color:"skyblue"
    })
  }
  const colorchocolatefun=()=>{
    console.log("chocolate")
    setColor({
      color:"chocolate"
    })
  }
  const backgroundbluefun=()=>{
    document.body.style.backgroundColor="blue"
  }
  const backgroundgreenfun=()=>{
    document.body.style.backgroundColor="green"
  }
  const backgroundredfun=()=>{
    document.body.style.backgroundColor="red"
  }

  const handleUpClick=()=>{
    console.log("upper case was clicked"+text)
    let newText=text.toUpperCase();
    setText(newText)
    prop.showAlert("converted to uppercase!","success");
  }
  const handleOnChange=(event)=>{
    console.log("onchange") 
    setText(event.target.value)
  }
  const handleLoClick=()=>{
    let newLoText=text.toLowerCase();
    setText(newLoText);
    prop.showAlert("converted to lowercase!","success");
  }
  const handleClearClick=()=>{
    setText(" ");
    prop.showAlert("text cleared successfully!","success");
  }
  const handleCopy=()=>{
    let textarea=document.getElementById("myBox");
    textarea.select();
    navigator.clipboard.writeText(text);
    prop.showAlert("text copied successfully!","success");
  }
  const [text,setText]=useState("Enter text here")
  const [initialColor,setColor]=useState({
     color:"black"
  })
  return (
    <>
     <div className="container">
       <h1>{prop.heading}</h1>
        <div className="mb-3">
          <textarea className={`form-control bg-${prop.mode==="light"?"light":"secondary"}`} value={text} style={initialColor} onChange={handleOnChange} id="myBox" rows="15" ></textarea>
        </div>      
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-3">Remove Extra spaces</button>
        <button className="btn btn-primary mx-3">download as txt file</button>
        <div>
          <h3>text color</h3>
        <div className="allColors" style={allColorsStyle}>
            <div className="colorred"        onClick={colorredfun} style={colorred}></div>
            <div className="colorgreen"      onClick={colorgreenfun}   style={colorgreen}></div>
            <div className="colorblue"       onClick={colorbluefun}   style={colorblue}></div>
            <div className="colororange"     onClick={colororangefun}   style={colororange}></div>
            <div className="colorpink"       onClick={colorpinkfun}   style={colorpink}></div>
            <div className="coloryellow"     onClick={coloryellowfun}   style={coloryellow}></div>
            <div className="colorbrown"      onClick={colorbrownfun}   style={colorbrown}></div>
            <div className="colorgold"       onClick={colorgoldfun}   style={colorgold}></div>
            <div className="colorviolet"     onClick={colorvioletfun}   style={colorviolet}></div>
            <div className="colorslateblue"  onClick={colorslatebluefun}   style={colorslateblue}></div>
            <div className="colorindigo"     onClick={colorindigofun}   style={colorindigo}></div>
            <div className="colorgrey"       onClick={colorgreyfun}   style={colorgrey}></div>
            <div className="colorlime"       onClick={colorlimefun}   style={colorlime}></div>
            <div className="colorseagreen"   onClick={colorseagreenfun}   style={colorseagreen}></div>
            <div className="colorolive"      onClick={colorolivefun}   style={colorolive}></div>
            <div className="colorteal"       onClick={colortealfun}   style={colorteal}></div>
            <div className="colorskyblue"    onClick={colorskybluefun}   style={colorskyblue}></div>
            <div className="colorchocolate"    onClick={colorchocolatefun}   style={colorchocolate}></div>
        </div>
        </div>          
        <div>
          <h3>select background color :</h3>
          <div className="backgroundColors" style={{height:"40px",width:"100px",borderStyle:"solid",display:"flex",flexDirection:"wrap",flexWrap:"wrap"}}>
              <div className="backgroundcolor1" style={{height:"20px",width:"20px",borderStyle:"solid",backgroundColor:"blue",margin:"5px"}}  onClick={backgroundbluefun}></div>
              <div className="backgroundcolor1" style={{height:"20px",width:"20px",borderStyle:"solid",backgroundColor:"green",margin:"5px"}} onClick={backgroundgreenfun}></div>
              <div className="backgroundcolor1" style={{height:"20px",width:"20px",borderStyle:"solid",backgroundColor:"red",margin:"5px"}}  onClick={backgroundredfun}></div>
          </div>
        </div>
     </div>  
     <div className="container my-3">
         <h1>Your Text Summary</h1>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
         <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)}minutes to read</p>
         <h1>preview</h1>
         <p>{text.length>0?text:"enter some text pls :"}</p>

     </div>
    </>
  )
}

