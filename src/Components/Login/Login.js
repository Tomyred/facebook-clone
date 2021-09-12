import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import tomylogo from './../../assets/images/profilepictures/tomi-logo.png'



export default function Login() {

    const [, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: result.additionalUserInfo.profile,
                })
                console.log(result.user)
        })
        .catch(error => console.log(error.message)) 
    }
    
    return (
        <div className="login">
            <div className="login__logo">
                <img src={tomylogo} 
                alt="facebook-logo" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}
