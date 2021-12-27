import React, { useState } from "react";
import AuthService from "../api/service/AuthService";
import * as Style from '../components/style';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('udah masuk')
            AuthService.login(username, password);
        
    }
    return (
        <Style.Container>
            <Style.Wrapper>
            <Style.Title>Login</Style.Title>
                <Style.Form onSubmit={handleLogin}>
                    <Style.Input placeholder="Email" type="text" onChange={onChangeEmail}/>
                    <Style.Input placeholder="Password" type="Password" onChange={onChangePassword}/>
                    <Style.Button>Login</Style.Button>
                    <Style.Link>Do not you remember Password?</Style.Link>
                    <Style.Link>Create New Account</Style.Link>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    )
}

export default Login