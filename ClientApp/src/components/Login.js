
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


const FACEBOOK_APP_ID = "1571786260014666";

export class Login extends Component {
    static displayName = Login.name;
    componentDidMount() {
        // Load the Facebook SDK asynchronously
        window.fbAsyncInit = function() {
            window.FB.init({
                appId: FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                version: 'v10.0'
            });

            // Trigger an event when Facebook SDK is initialized
            window.dispatchEvent(new Event('fb-sdk-initialized'));


            // Load the Facebook SDK script
            (function(d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        }
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
                        callback={responseFacebook}
                    />
                </div>
            </div>
        );
    }
}

// Facebook login response handler
const responseFacebook = (response) => {
    console.log(response);
    // Perform any necessary actions with the Facebook response
};

export default Login;
