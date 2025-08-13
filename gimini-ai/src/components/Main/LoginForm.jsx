import Main from './Main';
import { useState } from 'react';
import './Login.css';


const LoginForm=( {onLoginSuccess} )=>{

    const [name,setname]=useState("");

    const handeLogin=()=>{
        if(name.trim()){
            onLoginSuccess(name);
        }
        else{
            alert("Enter your name");
        }
    }


    
    return(
        <>
            <div className="log-container">
                <div className="login-title">
                    <p>Hey There!</p>
                    <p>Log in Here</p>
                </div>


                <div className="input-boxes">
                    <input type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                    />
                    <input type="main" placeholder="Mail"/>
                </div>

                <div className="radio-btn">
                    <input type="checkbox" name="allgoood" value={1}/>
                    <label htmlFor="name">All information are correct</label>
                </div>


                <div className="sign-in">
                    <button onClick={handeLogin}>SIGN IN</button>
                </div>

                <div className="info">
                    <p>Forgot <a href="#">UserName</a> / <a href='#'>PassWord</a></p>
                    <p>Don't have an account <a href="#">Sign Up</a></p>
                </div>
            </div> 
        </>
    );
}

export default LoginForm;