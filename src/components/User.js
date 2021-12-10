import React from 'react'
import { useState } from 'react/cjs/react.development';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase-config';

const User = () => {

    //STATES
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    const [error, setError] = useState(null);

    const [show, setShow] = useState(true);

    //IN CASE LOGIN state CHANGES
    onAuthStateChanged(auth, (currentUser) => {setUser(currentUser)});

    //CLOSE THE MODAL
    const handleClose = () => {
        setTimeout(setShow(false), 5000)
    }

    //REGISTER FUNCTION
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(    
            auth, 
            registerEmail, 
            registerPassword
            );
            console.log(user);
        } catch (err){
            console.log(err.message);
        }
    };

    //LOGIN FUNCTION
    const login = async () =>{
        try {
            const user = await signInWithEmailAndPassword(    
            auth, 
            loginEmail, 
            loginPassword
            );
            console.log(user);
            setError(null)
    
        } catch (err){
            setError(err.message)
            console.log(err.message);
        }
    }
    
    //LOGOUT FUNCTION
    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div>
            {show && <div className="modal">
                <div className="modal-container">
                    <div className="register">
                        <h3>Register User</h3>
                        <input type="text" placeholder="Full Name..." />

                        <input type="email" placeholder="Email..." 
                        onChange={(e)=> {
                            setRegisterEmail(e.target.value);
                        }}/>

                        <input type="number" placeholder="Phone Number..." />
                        
                        <input type="text" placeholder="Date of Birth..." />
                        
                        <input type="text" placeholder="Country..." />
                        
                        <input type="text" placeholder="Creation Date..." />
                        
                        <input type="text" placeholder="Password..." onChange={(e)=> {
                            setRegisterPassword(e.target.value);
                        }}/>

                        
                        <button onClick={register} className="btn">Create User</button>         
                    </div>

                    <div className="login">
                        <h3>Login</h3>
                        <input type="text" placeholder="Email..." onChange={(e)=> {
                            setLoginEmail(e.target.value);
                        }}/>

                        <input type="text" placeholder="Password" onChange={(e)=> {
                            setLoginPassword(e.target.value);
                        }}/>

                        <button onClick={login, handleClose} className="btn">Login</button>

                        {!error ? <p>User Logged In: </p> : <p style={{color:"red"}}>{error}</p>}
                        {user?.email}

                        <button onClick={logout} className="btn">Sign Out</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default User;
