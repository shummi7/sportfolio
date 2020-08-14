import React from 'react';

const Contact=(props)=>{


return(

    <div id='contact' className='contact'>
        <div className='contact_box'>
                
              <div className='contact_title'><h1>GET IN TOUCH</h1>
              <p className='contact_p'>If you are intersted in hiring for your project, please use the form below.</p></div>

              <form className='contact_desc' action="mailto:sharmila16moorthi@gmail.com" method="post" enctype="text/plain">

                <div className='contact_msg'>
                    <textarea className='contact_msg' type="text" name="comment" placeholder='Message' required></textarea>
                </div>
                <div className='contact_input'>
                    <input className='contact_input_name' type="text" name="Name" placeholder="Name" required/>
                    <input className='contact_input_email' type="text" name='E-mail' placeholder='E-mail' required/>
                    {/* <button className="contact_button"> */}
                        <input className="contact_button_input" type="submit" value="Send"/>
                    {/* </button> */}
                </div>              
            </form>
        </div>
    </div>

)
}


export default Contact;