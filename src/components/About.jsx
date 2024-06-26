import React from 'react'
// import PropTypes from 'prop-types'
// import { useState } from 'react';

export default function About(props) {

    // const [mode,setmode]= useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });

    // const handleMode=(event) => {
    //     if(mode.color === 'black')
    //     setmode({
    //         color:'white',
    //         backgroundColor:'black'
    //     });
    //     else
    //     setmode({
    //         color:'black',
    //         backgroundColor:'white'
    //     });
    // };

  return (
    <div className="container" style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
        <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>
            About Us
        </h1>
    <div className="accordion my-3" id="accordionExample">
  <div className="accordion-item"style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'}`}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="form-check form-switch" style={{backgroundColor: props.mode ==='light'?'white':'#242a3e'}}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleMode}/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div> */}
    </div>
  )
}
