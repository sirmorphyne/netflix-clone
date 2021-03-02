import React from 'react';
import {Container,Input,Button,Text,Break } from './styles/opt-form';
export default function OptForm ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({ ...restPrpos}){
    return <Input {...restPrpos}></Input>
}

OptForm.Button = function OptFormButton({children, ...restPrpos}){
    return <Button {...restPrpos}>{children}</Button>
}

OptForm.Break = function OptFormBreak({ ...restPrpos}){
    return <Break {...restPrpos}></Break>
}

OptForm.Button = function OptFormButton({children, ...restPrpos}){
    return <Button {...restPrpos}>{children}
    <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
}


OptForm.Text = function OptFormText({children, ...restPrpos}){
    return <Text {...restPrpos}>{children}</Text>
}


