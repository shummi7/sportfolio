import React from 'react';

const Sidebar=(props)=>{
    const sidebarClass='sidebar_div sidebar_div_'+props.sidebarStatus;
    // console.log(sidebarClass);
    return(
        <div className={sidebarClass}>
            <a href='#home' onClick={props.onAClick}>Home</a>
            <a href='#about' onClick={props.onAClick}>About</a>
            <a href='#skills' onClick={props.onAClick}>Skills</a>
            <a href='#projects' onClick={props.onAClick}>Projects</a>
            <a href='#contact' onClick={props.onAClick}>Contact</a>
        </div>
    )
}

export default Sidebar;