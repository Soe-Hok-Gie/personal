import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    background-color: whitesmoke;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

export const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;
export const Input = styled.input`
    flex: 1;
    min-width: 55%;
    margin: 15px 0;
    padding: 10px;
`;
export const Button = styled.button`
    width: 40%;
    padding: 10px 0px;
    border: none;
    background-color: teal;
    color: whitesmoke;
    cursor: pointer;
`;
export const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
`;