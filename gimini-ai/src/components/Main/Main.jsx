import React, { useState } from 'react';
import {assets} from '../../assets/assets/assets'
import LoginForm from './LoginForm';
import './Main.css';


const Main=({username})=>{

    // to show the send icon if the input has any text
    const [input,setinput]=useState("");

    return(
        <div className="main">
            <nav className='nav-bar'>
                <p>Gimini</p>
            
            </nav>


           
            <div className="main-conatainer">
                <div className="greet">
                    <p><span>Hello, {username}..</span></p>
                    <p className='text'>How can i help you today ?</p>
                </div>

                
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>


                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>



                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>



                    <div className="card">
                        <p>Tell me about react js tell me React Native</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </div>
           

            <div className="bottom-container">
                <div className="box-search">
                    <input classNam="input-box" type="text" placeholder='Enter a Promot Here..' onChange={(e)=>setinput(e.target.value)}/>
                </div>

                <div className="buttom-image">
                    <img className='gallleryImg' src={assets.gallery_icon} alt="" />
                    <img className='micImg' src={assets.mic_icon} alt="" />
                    {input ? <img className='sendImg' src={assets.send_icon} alt="" /> : null}
                </div>
            </div>
        </div>
    );
}

export default Main;