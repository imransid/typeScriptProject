import React from "react";
import AuthSignIn from "../@components/auth-sign-in/AuthSignIn";
// import AuthWelcome from "../@components/auth-welcome/AuthWelcome";

import "./auth-page.style.scss";

const AuthPage = () => {
	return (
		<div className="auth-page">
			<div
				className="auth-page-title-blk"
				style={{
					backgroundImage: `url(https://i.ibb.co/R0FmPPw/anas-alshanti-fe-Xpd-V001o4-unsplash.jpg)`,
				}}>
				<h2>
					Welcome to <span>Message analytica</span>
				</h2>
			</div>
			<div className="auth-page-content-blk">
				{/* <AuthWelcome /> */}
				{   <AuthSignIn />}
			</div>
		</div>
	);
};

export default AuthPage;
