import React from 'react'

export default function About(props) {
   //  const [myStyle,setmyStyle]= useState(
  //  {
   //     color:'black',
     //   backgroundColor:'white'
  //  })
  let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':' white',
  }

  return (
    <div className="container" style={{ color: props.mode==='dark'?'white':'black'}}>
      <h2 className="my-3">About us</h2>
      <div  className="accordion" id="accordionExample">
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingOne">
      <button  className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Convert to Upper case!</strong>  
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div  className="accordion-body" style={myStyle}>
        <strong>This is the 1- item's accordion body.</strong> The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.
THIS IS AN EXAMPLE OF UPPER CASE.
    </div>
  </div>
  <div  className="accordion" id="accordionExample">
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingOne">
      <button  className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Convert to Lower case!</strong>   
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div  className="accordion-body" style={myStyle}>
        <strong>This is the 2- item's accordion body.</strong> If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.
this is an example of lower case. <code>.accordion-body</code>, 
      </div>
    </div>
  </div>
  <div  className="accordion" id="accordionExample">
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingOne">
      <button  className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Clear all text!</strong>   
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div  className="accordion-body" style={myStyle}>
        <strong>This is the 3- item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div  className="accordion-item" style={myStyle}>
    <h2  className="accordion-header" id="headingTwo">
      <button  className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Copy to Clipboard!</strong>   
      </button>
    </h2>
    <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div  className="accordion-body" style={myStyle}>
        <strong>This is the 4- item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div  className="accordion" id="accordionExample">
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingOne">
      <button  className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Remove Extraspace!</strong>   
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div  className="accordion-body" style={myStyle}>
        <strong>This is the 5- item's accordion body.</strong> The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.
THIS IS AN EXAMPLE OF UPPER CASE.
    </div>
  </div>
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingThree">
      <button  className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>Remove Extraspace!</strong>  
      </button>
    </h2>
    <div id="collapseThree"  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div  className="accordion-body" style={myStyle}>
        <strong>This is the 6- item's accordion body.</strong> ,The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.
Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.
This Is An Example Of Capitalized Case.
      </div>
    </div>
  </div>
</div>
 
<div className="container">
</div>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
      
  )
}

