import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 50px 90px;
    border: 1px solid #1d81af;
    border-radius: 10px;
`
export const Label = styled.label`
    font-size: 20px;
    color: #1d81af;
    font-weight: bold;
`
export const Input = styled.input`
    color: #000;
    border: 1px solid #1d81af;
    border-radius: 5px;
    margin-bottom: 20px;
`
export const Button = styled.button`
    margin-top: 20px;
    padding: 15px;
    border: none;
    background-color: #1d81af;
    border-radius: 10px;
    color: #fff;
`