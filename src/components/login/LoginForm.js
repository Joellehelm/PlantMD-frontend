import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from "../../actions/auth";

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    console.log(email)
    console.log(password)

    const user = {
      email: email,
      password: password,
    }

    props.login(user, navigate);


    // fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({ user })
    // })
    //   .then(r => r.json())
    //   .then(response => {
    //     // TODO
    //     // handle errors
    //     localStorage.setItem("token", response.jwt)
    //     dispatch({ type: action.LOGIN, payload: response })
    //     navigate('/home')

    //   })
  }

  return <div className={'login-container'}>
    <div className={'login-input-container'}>
      <TextField id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      <TextField id="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div className={'submit-button-container'}>
      <Button onClick={handleSubmit} className="submit-button" color={"#FF5733"} variant="outlined">Submit</Button>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.auth,
})

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);