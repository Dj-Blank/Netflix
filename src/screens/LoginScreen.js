import React, {useState} from 'react';
import SignupScreen from './SignupScreen';



function Loginscreen() {

    const [signIn, setSignIn] = useState(false);

    return  <div className="loginScreen"> 
            <div className="loginScreen_background">
                <img className="loginScreen_logo"
                src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix-500x281.png" alt=""/>  
                <button onClick={() => setSignIn(true)}className="loginScreen_button"> Sign in</button>  

                <div className="loginScreen_gradient"/>   
            </div>

            <div className="loginScreen_body">
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                    <h1>Unlimmited films</h1>
                    <h2>Watch anywhere</h2>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Adresss"/>
                            <button onClick={() => setSignIn(true)} className="loginScreen_getStarted">Register</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
}


export default Loginscreen;
