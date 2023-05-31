import React from 'react';
import FacebookLogin from 'react-facebook-login';

export class Login extends React.Component {
    responseFacebook(response) {
        console.log(response);
        console.log(response.email);
    }

    render() {
        return (
            <FacebookLogin
                appId="1571786260014666"
                autoLoad={false}
                fields="name,email"
                scope="public_profile,email"
                callback={this.responseFacebook}
            />
        )
    }
}

