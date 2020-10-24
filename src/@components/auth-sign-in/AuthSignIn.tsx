// import { Button, TextField } from '@material-ui/core'
// import { type } from 'os'
import React, { useState, useCallback } from "react";
import CustomButton from "../custom-button/CustomButton";
import CustomTitle from "../custom-title/CustomTitle";
import FormInput from "../form-input/FormInput";
import "./auth-sign-in.style.scss";
// import authLogin from '../../@services/apiService/authService';

import { useDispatch } from "react-redux";

import { login } from "../../@actions/auth";
import { register } from "../../serviceWorker";

const AuthSignIn: React.FC = () => {
  const [email, setEmail] = useState("jessan@gmail.com");
  const [password, setPassword] = useState("123456");

  const dispatch = useDispatch();

  //Dispatching logins
  const Login = useCallback(() => dispatch(login(email, password)), [
    login,
    email,
    password,
  ]);

  // const Register = useCallback(() => dispatch(register(email, password)), [

  // ]);

  return (
    <div className="sign-in-blk">
      <CustomTitle>Welcome back</CustomTitle>
      <div className="auth-form">
        <div className="auth-input">
          <label htmlFor="email">Email</label>
          <FormInput
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <small className="auth-form-status danger invisiable">
            This field is required.
          </small>
        </div>
        <div className="auth-input">
          <label htmlFor="password">Password</label>
          <FormInput
            value={password}
            type="password"
            placeholder="password"
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          <small className="auth-form-status success invisiable">
            This field is required.
          </small>
        </div>
        <div className="auth-input">
          <div className="auth-check-box">
            <div className="custom-checkbox">
              <label className="container">
                Remember me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <a href="#">I forgot my password</a>
          </div>
        </div>
        <div className="auth-input">
          <div className="auth-btm-buttons">
            <div onClick={Login}>
              Button
              {/* <CustomButton btype="outline" buttontitle="Back" /> */}
            </div>
            <CustomButton btype="secondary" buttontitle="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSignIn;
