import React from 'react';
import {Grid, Paper, Avatar, TextField, Button, Link, Typography} from '@material-ui/core';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Login=({handleChange}) => {

    const onSubmit=(values, props) => {

        fetch("/login").then(res => {
            if(res.ok){
                console.log(res)
            }
        })
    }

    const paperStyle = {
        padding: "30px 20px",
        height: '70vh',
        width: 300,
        margin: "20px auto"
    }

    const avatarStyle = {
        backgroundColor: 'green'
    }

    const initialValues = {
        username: "",
        password: "",
        remember: false
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().email('Please enter valid email').required('Required'),
        password: Yup.string().required('Required')

    })
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>G</Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label="Name" name="username" 
                            placeholder="Enter name" fullWidth required
                            helperText={<ErrorMessage name="username"/>}
                            />
                            <Field as={TextField} label="Password" name="password" placeholder="Enter password" 
                            helperText={<ErrorMessage name="password"/>}
                            type="password" fullWidth required/>
                            <Field as={FormControlLabel} name="remember" control={<Checkbox defaultChecked />} label="Remember Me" />
                            <Button type="submit" color="primary" variant="contained" fullWidth> Sign in</Button>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link href="#">
                        Forgot Password
                    </Link>
                </Typography>

                <Typography>
                    <Link href="#" onClick={() =>handleChange("event",1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>

        </Grid>
    )
}

export default Login; 