import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import {useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';

function Login() {
    const [state,  dispatch] = useStateValue();


    const singIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
             alert(error.message);
        });
    };


    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                alt="" />
                <h1>Sing in to Slack </h1>
                <p>Clone By Nayan Mavani</p>
                <Button onClick={singIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;
