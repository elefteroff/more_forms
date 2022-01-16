import React, { useState } from  'react';
    
    
const Form = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [firstInputError, setFirstInputError] = useState("");
    const [lastInputError, setLastInputError] = useState("");
    const [emailInputError, setEmailInputError] = useState("");
    const [passwordInputError, setPasswordInputError] = useState("");
    const [confirmPasswordInputError, setConfirmPasswordInputError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        setFirstInputError();
        if(firstname.length < 2 && firstname.length > 0) {
            setFirstInputError("First name must be at least 2 characters!");
        }
        setLastInputError();
        if(lastname.length < 2 && lastname.length > 0) {
            setLastInputError("Last name must be at least 2 characters!");
        } 
        setEmailInputError();
        if(email.length < 5 && email.length > 0) {
            setEmailInputError("Email must be at least 5 characters!");
        } 
        setPasswordInputError();
        if(password.length < 8 && password.length > 0) {
            setPasswordInputError("Password must be at least 8 characters!");
        } 
        setConfirmPasswordInputError();
        if(confirmpassword.length < 8 && confirmpassword.length > 0) {
            setConfirmPasswordInputError("Password must be at least 8 characters!");
        } 
        //resetting state
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value = { firstname }/>
                { 
                    setFirstInputError ?
                    <p style={{ color:'red' }} > { firstInputError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value = { lastname }/>
                { 
                    setLastInputError ?
                    <p style={{ color:'red' }} > { lastInputError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value = { email }/>
                { 
                    setEmailInputError ?
                    <p style={{ color:'red' }} > { emailInputError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value = { password }/>
                { 
                    setPasswordInputError ?
                    <p style={{ color:'red' }} > { passwordInputError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value = { confirmpassword }/>
                { 
                    setConfirmPasswordInputError ?
                    <p style={{ color:'red' }} > { confirmPasswordInputError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User"/>
            First Name: {firstname}, 
            Last Name: {lastname}, 
            Email: {email}, 
            Password: {password}, 
            Confirm Password: {confirmpassword}
        </form>
    );
}
    
export default Form;