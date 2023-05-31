
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


const FACEBOOK_APP_ID = "1571786260014666";

export class Login extends Component {
    static displayName = Login.name;
    componentDidMount() {

        window.fbAsyncInit = function() {
            console.log("running");
            window.FB.init({
                appId: FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                version: 'v17.0'
            });

            window.FB.AppEvents.logPageView();

        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <FacebookLogin
                        appId={FACEBOOK_APP_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={test}
                        callback={responseFacebook}
                        onFailure={responseFailed}
                    />
                </div>
            </div>
        );
    }
}
const test = () => {
    console.log("working");
}
// Facebook login response handler
const responseFacebook = (response) => {
    console.log(response.Facebook);

    // Perform any necessary actions with the Facebook response
};

const responseFailed = (response) => {

    console.log("ERROR");
    console.log(response.Facebook);

    // Perform any necessary actions with the Facebook response
};

export default Login;
