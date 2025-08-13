import React, { useState } from 'react';
import './sidebar.css';
import {assets} from '../../assets/assets/assets'
const Sidebar=()=>{

    const [extended , setExdented]=useState(false);


    return(
        <>
            <div className="sidebar">
                <div className="top">
                    <img onClick={()=>setExdented(prev=>!prev)}  className="menu-img" src={assets.menu_icon} alt="" />

                    <div className="newchat">
                        <img className='plus-icon' src={assets.plus_icon} alt="" />
                        {extended ? <p>New Chat</p> :null}
                    </div>

                    {extended ? <div className="recent">
                        <p className='recent-title'>Recent</p>

                        <div className="recent-entrys entry">
                            <img className='msg-icon' src={assets.message_icon} alt="" />
                            <p>What is React...</p>
                        </div>
                    </div> : null}
                </div>


                <div className="bottom">
                    <div className="bottom-imgs footer recent-entrys">
                        <img className='que-icon' src={assets.question_icon} alt="" />
                        {extended ? <p>Help</p> : null}
                    </div>

                    <div className="bottom-imgs footer recent-entrys">
                        <img className='history-icon' src={assets.history_icon} alt="" />
                        {extended ? <p>Histroy</p> : null}
                    </div>

                    <div className="bottom-imgs footer recent-entrys">
                        <img className='setting-icon' src={assets.setting_icon} alt="" />
                        {extended ? <p>Setting</p> : null}
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Sidebar;