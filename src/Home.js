import React from 'react';
import bg1 from './svgfiles/bg1.svg';

const Home=(props)=>{


return(
    <div id='home' className='home'>
        <div id="ons">Shivaya Nama</div>
        <div className='spacer1'/>
        <div className='spacer2'/>
        <div className='home_p'>
            <h1>Hello</h1>
            <h1>I'm <span className='home_color'>Sharmila Moorthi</span></h1>
            <p>Web Developer from Euless, TX</p>
        </div>
        <img className='img_bg1' src={bg1}/>
    </div>
)
}


export default Home;