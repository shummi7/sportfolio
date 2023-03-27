import React from 'react';

const Header=(props)=>{
const header_scroll=props.headerScroll?'header header_scroll':'header';
const ascroll=props.headerScroll?'a_scroll':'';
const hams=props.hamsactive?"hamburger hamburger--spring is-active":"hamburger hamburger--spring"

return(
    <div className={header_scroll}>
        <p style={{userSelect: "None"}}>Sharmi</p>

        <div className='spacer'/>

        <div className='normal_nav'>
            <a className={ascroll} href='#home'>Home</a>
            <a className={ascroll}  href='#about'>About</a>
            <a className={ascroll} href='#skills'>Skills</a>
            <a className={ascroll} href='#projects'>Projects</a>
            <a className={ascroll} href='#contact'>Contact</a>
        </div>

        <div className='hamburger_nav'>
            {/* <button className='hamburger_button' onClick={props.onHamButtonClick}</button> */}
            <button className={hams} onClick={props.onHamButtonClick} type="button">
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
            </button>
        </div>

    </div>
)
}


export default Header;