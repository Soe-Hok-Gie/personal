import React from 'react'
import styled from 'styled-components'
import * as Style from '../components/style';

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;



const Register = () => {
    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Title>Register</Style.Title>
                <Style.Form>
                    <Style.Input placeholder="User Name"/>
                    <Style.Input placeholder="Email"/>
                    <Style.Input placeholder="name"/>
                    <Style.Input placeholder="Password"/>
                    {/* <Input placeholder="Confirm Password"/> */}
                <Agreement>The zero-trust approach
                     to security is the best way right
                     now to protect mission-critical data and systems. PRIVACY By POLICE </Agreement>
                <Style.Button>Create an Account </Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    )
}

export default Register
