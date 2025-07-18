import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [mode, setMode] = useState('sign-in');
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const clearAll = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  const toggle = () => {
    setMode(prev => (prev === 'sign-in' ? 'sign-up' : 'sign-in'));
    clearAll();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMode('sign-in');
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const handleRegister = async () => {
    let newErrors = {};
    if (!username) newErrors.username = 'Enter your username *';
    if (!email) newErrors.email = 'Enter your email *';
    if (!password) newErrors.password = 'Enter your password *';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm your password *';
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match *';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      console.log(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async () => {
    let newErrors = {};
    if (!username) newErrors.username = 'Enter your username *';
    if (!password) newErrors.password = 'Enter your password *';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate('/');
      alert(`Hello ${username}! Welcome back what do you want to eat?`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="container" className={`container ${mode}`}>
      <div className="row">
        
        
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input name='Username' autoComplete='Username' type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <span className='red'>{errors.username}</span>
              </div>
              <div className="input-group">
                <i className='bx bx-mail-send'></i>
                <input name='Email' autoComplete='Email' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <span className='red'>{errors.email}</span>
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input
                  name='Password'
                  autoComplete='new-password'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
                <span className='red'>{errors.password}</span>
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input
                  name='Confirm Password'
                  autoComplete='off'
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <span className='red'>{errors.confirmPassword}</span>
              </div>
              <button onClick={handleRegister}>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">Sign in here</b>
              </p>
            </div>
          </div>
        </div>


        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input
                  name='Username'
                  autoComplete='Username'
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)} />
                <span className='red'>{errors.username}</span>
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input
                  name='Password'
                  autoComplete="current-password"
                  type="password"
                  placeholder="Password"
                  value={password} onChange={e => setPassword(e.target.value)} />
                <span className='red'>{errors.password}</span>
              </div>
              <button onClick={handleLogin}>Sign in</button>
              <p><b>Forgot password?</b></p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">Sign up here</b>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>

        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;