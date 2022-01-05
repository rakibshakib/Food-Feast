import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../../components/Navbar/Header';
import Footer from '../../../components/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, isLoading, authError } = useAuth(); 

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
            <div> 
                <Header/>       
                <Container className="login-page">
            <div
                style={{ height: "100vh" }}
                className="d-flex mx-3 align-items-center justify-content-center"
            >
                <div className="formContainer">
                    <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Please Login</Typography>
                    <form className="loginForm" onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" color="success">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Button onClick={handleGoogleSignIn} sx={{ justifyContent: 'center' }} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '85%' }} src='https://i.ibb.co/nb3H3WZ/Sign-up-bro.png' alt="" />
                </Grid>
                    </Grid>
                </div>
            </div>        
                </Container>
                <Footer/>
            </div>    
    );
};

export default Login;