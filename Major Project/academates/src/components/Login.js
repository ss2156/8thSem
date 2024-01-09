import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import photo from '../assets/images/20944201.jpg'

const Login = () => {
	const [credentials, setCredentials] = useState({username: "", password: ""});
	const [alert, setAlert] = useState(null);
	const navigate = useNavigate();

	const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

	const handleSubmit = (e) => {
		e.preventDefault();
		if(credentials.username === 'aayushma' && credentials.password === 'aayushma') {
			setAlert('Login successfull');

			setTimeout(() => {
				setAlert(null);
				navigate('/home');
			},2000);

		}
		else {
			setAlert('Login failed');
			setCredentials({username: "", password: ""});
			setTimeout(() => {
				setAlert(null);
			},2000);
		}

	}

  return (
	<div className='container'>
	  <div className="left">
		<div className="title">
			<h1>ACADEMATES</h1>
		</div>

		<div className="title-image">
			<img src={photo} alt=''/>
		</div>
	  </div>
	  <div className="right">
		<div className="outer-container">
			<div className="header">
				<h1>Welcome Back!</h1>
				<p>Don't have account yet? <a href="#">Sign up</a></p>
			</div>
			

			<div className="inner-container">
				<div className="content-body">
					{alert && <p id='alert-text'>{alert}</p> }
					<label htmlFor="username">Username</label>
					<input type="text" id='username' name='username' value={credentials.username} onChange={onChange} />
					<label htmlFor="password">Password</label>
					<input type="password" id='password' name='password' value={credentials.password} onChange={onChange} />
					<div className="forgot-password-section">
						<div className="check">
							<input type="checkbox"></input>
							<p>keep me logged in</p>
						</div>
						<div className="forgot-password">
							<a href="#">Forgot password?</a>
						</div>
					</div>
					
				</div>

				<div className="footer">
					<button onClick={handleSubmit}>Login</button>
				</div>
			</div>

		</div>
	  </div>
	</div>
  )
}

export default Login;
