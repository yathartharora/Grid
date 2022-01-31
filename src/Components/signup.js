import React from 'react';
import {Grid, Paper, Avatar, TextField, Button, Link, Typography} from '@material-ui/core';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from "axios";


const Signup = () => {

    const sign = {
        padding: "30px 20px",
        height: '70vh',
        width: 300,
        margin: "20px auto"
    }

    const bt = {
        margin: "20px auto"
    }

    const avatarStyle = {
        backgroundColor: 'green'
    }

    const onSubmit = (values,props) => {

        const newUser = {
            name: values.name,
            email: values.email,
            pass: values.pass,
            passconf: values.passconf
        }
        axios.post('http://localhost:3001/create', newUser)
    }

    const initialValues = {
        name: "",
        email: "",
        pass: "",
        passconf: ""
    }

    return(
        <Grid>
            <Paper style={sign} elevation={20}>
                <Grid align="center">
                <Avatar style={avatarStyle}>G</Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} fullWidth required label="Name" name="name"/>
                                <Field as={TextField} fullWidth required label="Email" name="email"/>
                                <Field as={TextField} fullWidth required label="Password" name="pass" type="password"/>
                                <Field as={TextField} fullWidth required label="Confirm Password" name="passconf" type="password"/>
                                <Button type="submit" variant="contained" color="primary" style={bt}>Sign Up</Button>
                            </Form>
                        )}
                    </Formik>
            </Paper>
        </Grid>
    )
}


export default Signup;