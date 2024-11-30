import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    console.log(email)
    console.log(password)
    console.log(passwordConfirmation)
    // CHECK IF PASSWORD AND PASSWORDCOMFiRM ARE EQUAL AND HANDLE ERROR
    const user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(r => r.json())
      .then(response => {
        console.log(response)
        // TODO
        // success and redirect here
      })
  }

  return <div className={'signup-container'}>
    <div className={'signup-input-container'}>
      <TextField id="name" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
      <TextField id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      <TextField id="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      <TextField id="passwordConfirmation" label="Password Confirmation" variant="outlined" onChange={(e) => setPasswordConfirmation(e.target.value)} />
    </div>
    <div className={'submit-button-container'}>
      <Button onClick={handleSubmit} className="submit-button" color={"#FF5733"} variant="outlined">Submit</Button>
    </div>
  </div>
}

export default Signup;