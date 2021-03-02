import React, { useState,useContext} from  'react';

import {FirebaseContext} from '../context/firebase';
import * as ROUTES from '../constants/routes';
import {Form} from '../components';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import { useHistory } from 'react-router-dom';

export default function Signup(){

    const history =  useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstName,setFirstName]= useState('');
    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError]= useState('');
    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    
    const handleSignup = (event) =>{
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(emailAddress,password).then((result)=>result.user.updateProfile({
            displayName:firstName,
            photoURL:Math.floor(Math.random() * 5 ) + 1,
        }).then(()=>{
            history.push(ROUTES.BROWSE);
        })
        ).catch((error)=>{
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };
    
    return ( 
        <>
    <HeaderContainer>
    <Form>
        <Form.Title>Sign Up</Form.Title>
        {error &&  <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignup} method ="POST">
        <Form.Input 
            placeholder="First Name" value={firstName} onChange={({target})=>setFirstName(target.value)} ></Form.Input>
            <Form.Input 
            placeholder="Email Address" value={emailAddress} onChange={({target})=>setEmailAddress(target.value)} ></Form.Input>
            <Form.Input
            type="password"
            autocomplete="off" 
            placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)} ></Form.Input>
        <Form.Submit disabled = {isInvalid} type="submit">Sign Up</Form.Submit>
        </Form.Base>
        <Form.Text> Already a user?  <Form.Link to="/signin">Sign in now</Form.Link></Form.Text>
        <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
    </Form>
</HeaderContainer>
<FooterContainer />
</>
);
}