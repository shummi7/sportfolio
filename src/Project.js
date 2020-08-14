import React from 'react';
import smoothie from './svgfiles/smoothie.svg';
import ecommerce from './svgfiles/shopping.svg';
import robot from './svgfiles/chatbot.svg';
import todo from './svgfiles/task.svg';
import snake from './svgfiles/snake.svg';
import gradient from './svgfiles/color.svg';
import brain from './svgfiles/brain.svg';
import quiz from './svgfiles/quiz.svg';

const Project = (props) => {
    return (
        
        <div id='projects' className='project'>
        
            <div className='project_title'><h1>PROJECTS</h1></div>
            <div className='spacer4' />
            
            <div className='project_list'>
                <div className='pro'>
                    <div className='pro_img'>
                        <img src={smoothie} />
                    </div>
                    <div className='pro_word'>
                        <p className='pro_title'>Smoothie App</p>
                        <p className='pro_desc'>Developed a smoothie app that allows you to choose different fruits to make smoothie.</p>
                        <div className='pro_links'>
                            <a href='https://shummi7.github.io/smoothie-app/'>Live</a>
                            <a href='https://github.com/shummi7/smoothie-app'>Code</a>
                        </div>
                    </div>
                </div>
                <div className='pro'>

                    <div className='pro_img'>
                        <img src={ecommerce} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>E-commerce</p>
                        <p className='pro_desc'>Built an E-commerce website from scratch using React. This website allows you to shop clothing and electronics. </p>
                        <div className='pro_links'>
                            <a href='https://shummi7.github.io/ecommerce/'>Live</a>
                            <a href='https://github.com/shummi7/ecommerce'>Code</a>
                        </div>
                    </div>

                </div>

                <div className='pro'>

                    <div className='pro_img'>
                        <img src={robot} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>RoboFriends</p>
                        <p className='pro_desc'>An entry-level web application made using REACT, which views contact cards of robot friends and a search bar which dynamically searches with input. </p>
                        <div className='pro_links'>
                            <a href='https://shummi7.github.io/testrobo/'>Live</a>
                            <a href='https://github.com/shummi7/testrobo'>Code</a>
                        </div>
                    </div>

                </div>

                <div className='pro'>

                    <div className='pro_img'>
                        <img src={todo} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>To-Do List</p>
                        <p className='pro_desc'>To-Do application made using pure JavaScript with extra options like deleting, checking items and also shows block of checked items</p>
                        <div className='pro_links'>
                            <a href='https://shummi7.github.io/Todo_List/'>Live</a>
                            <a href='https://github.com/shummi7/Todo_List'>Code</a>
                        </div>
                    </div>

                </div>

                <div className='pro'>

                    <div className='pro_img'>
                        <img src={snake} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>Snake Game</p>
                        <p className='pro_desc'>Developed snake game using JavaScript without libraries and styled with CSS3. It includes speed options and sound files. </p>
                        <div className='pro_links'>
                            <a href='https://shummi7.github.io/Snake_Game/'>Live</a>
                            <a href='https://github.com/shummi7/Snake_Game'>Code</a>
                        </div>
                    </div>

                </div>

                <div className='pro'>

                    <div className='pro_img'>
                        <img src={gradient} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>Background-Gradient</p>
                        <p className='pro_desc'>Generates Live gradient from chosen colors and displays it CSS code for usage.</p>
                        <div className='pro_links'>
                            <a href='https://shummi7.github.io/Background_Gradient/'>Live</a>
                            <a href='https://github.com/shummi7/Background_Gradient'>Code</a>
                        </div>
                    </div>

                </div>

                <div className='pro'>

                    <div className='pro_img'>
                        <img src={brain} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>Smart Brain API</p>
                        <p className='pro_desc'>Application that detects face from the user's input and records the entries to a database. The App uses the Clarifai API to get the Face regions of the user's input.</p>
                        <div className='pro_links'>
                            <a href='https://smart-brain-face-rcgn.herokuapp.com/'>Live</a>
                            <a href='https://github.com/shummi7/smart-brain-api'>Code</a>
                        </div>
                    </div>

                </div>

                <div className='pro'>

                    <div className='pro_img'>
                        <img src={quiz} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>Quiz App</p>
                        <p className='pro_desc'>Quiz App that test your knowledge. There are variety of categories to choose from. The app uses API to fetch questions and answers.</p>
                        <div className='pro_links'>
                            <a href='https://shummi-quizapp.herokuapp.com/'>Live</a>
                            <a href='https://github.com/shummi7/quizApp'>Code</a>
                        </div>
                    </div>

                </div>

                {/* <div className='pro pro1'>

                    <div className='pro_img pro_img1'>
                        <img src={quiz} alt='hello' />
                    </div>

                    <div className='pro_word'>
                        <p className='pro_title'>Business Website</p>
                            <ul className='pro_desc'>
                            <li>Built responsive and adaptive website for the start up business.</li>
                            <li>Collaborated with UI Designer team.</li>
                            <li>Libraries used: React and Sass.</li>
                            </ul>
                    </div>

                </div> */}

            </div>
            {/* <div className='experience'>
                <h1>Experience</h1>
                <h4>Microsoft Azure Team - Zen3 Infosolution America</h4>
                <p>Junior Software Engineer</p>
                <ul className='exp_ul'>
                    <li>-Implemented new features and designs in the web application.</li>
                    <li>-Resolved various issues related to functionality logics.</li>
                    <li>-Worked on fixing bugs on front-end.</li>
                    <li>-Developed API endpoints (Back-end C#).</li>
                </ul>
            </div> */}
        </div>
    )
}


export default Project;