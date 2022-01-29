import React from 'react';
import {Grid, Paper, Avatar, TextField, Button, Link, Typography} from '@material-ui/core';

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
    return(
        <Grid>
            <Paper style={sign} elevation={20}>
                <Grid align="center">
                <Avatar style={avatarStyle}>G</Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form>
                <TextField fullWidth required label="Name"/>
                <TextField fullWidth required label="Email"/>
                <TextField fullWidth required label="Password" type="password"/>
                <TextField fullWidth required label="Confirm Password" type="password"/>
                <Button type="submit" variant="contained" color="primary" style={bt}>Sign Up</Button>
                </form>
            </Paper>
            
            
        </Grid>
    )
}


export default Signup;