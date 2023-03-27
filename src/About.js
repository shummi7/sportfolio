import React from 'react';
import about from './svgfiles/about.svg';


const About=(props)=>{


return(
    <div id='about' className='about'>
        <div className='about_title'><h1>ABOUT</h1></div>
        <div className='spacer3'/>
        <img src={about} className='about_img' alt='Banner vector created by roserodionova - www.freepik.com'/>
        <div  id='skills' className='about_1'>
        <p className='about_desc'>Being a electronics designer, I've found myself obsessed with web designing. I am very passionate about blending humanities and technologies to create well functioning and visually appealing products. I have a Masters and Bachelors in Electronics Engineering with specialization in VLSI. I have self-taught front-end web development courses online. With basic back-end, and solid front-end skills I design and develop responsive websites.</p>

        <h3>Skills</h3>
        <div className='skills_list'>
            <div className='skills_list1'>
            <p>HTML</p>
            <p>CSS</p>
            <p>Sass</p>
            <p>JavaScript</p>
            </div>

            <div className='skills_list3'>
            <p>Express.js</p>
            <p>PostgreSQL</p>
            <p>Bootstrap</p>
            <p>Illustrator</p>
            </div>

            <div className='skills_list2'>
            <p>Photoshop</p>
            <p>Node.js</p>
            <p>React</p>
            <p>Angular</p>
            </div>
        </div>
        </div>

    </div>
)
}


export default About;
