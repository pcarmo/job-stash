
import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <div>
                    <button>Facebook</button>
                </div>
                <div>
                    <button>Google</button>
                </div>
            </div>
        );
    }
}
