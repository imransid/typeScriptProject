import React from 'react';
import {  ReactComponent as FacebookIcon} from "../../@assets/facebook.svg";
import {  ReactComponent as GoogleIcon} from "../../@assets/search.svg";
// import { Link } from '@material-ui/core';
import CustomButton from '../custom-button/CustomButton';
import './auth-welcome.style.scss'



const AuthWelcome :React.FC= () => {
    return (
        <div className="auth-welcome-content">
               <h2>Welcome back</h2>
                <CustomButton>Log in with email</CustomButton>
                <div className="seperator"><span>OR</span></div>
                <div className="auth-scl-buttons">
                <CustomButton btype="socialButton" buttontitle="Log in with Google"><GoogleIcon/> Log in with Google</CustomButton>
                <CustomButton btype="socialButton" buttontitle="Log in with Facebook"><FacebookIcon/> </CustomButton>
                </div>
                <h5>No account yet? Sign up for free</h5>
               </div>
    )
}

export default AuthWelcome
