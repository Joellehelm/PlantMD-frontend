import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function LandingPage() {
  const navigate = useNavigate();

  const autoLogin = () => {
    console.log('ARE WE EVEN HITTING THIS ')
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/auto_login`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Authorization": `JWT ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(r => r.json())
      .then(response => {
        if (response.user) {
          // TODO
          // clean this up
          console.log("success auto logging in")
          // navigate("/home")
        }
      })
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     // TODO
  //     // fix this use context or something
  //     // autoLogin()
  //   } else {
  //     // navigate("/")
  //   }
  // }, []);

  return <>
    LANDING PAGE
  </>
}

const mapStateToProps = (state) => ({
  user: state.auth,
})

export default connect(mapStateToProps)(LandingPage);