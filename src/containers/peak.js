import React from 'react';
import {Button, Grid, Paper, TextField, Radio, RadioGroup, FormLabel, MenuItem, Select, InputLabel} from '@material-ui/core';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';


const Peak = () => {

    const sign = {
        padding: "30px 20px",
        height: '50vh',
        width: 300,
        margin: "20px 20px"
    }

    const bt = {
        margin: "20px auto"
    }

    const onSubmit = (values,props) => {

        const newUser = {
            name: values.name,
            email: values.email,
            pass: values.pass,
            passconf: values.passconf
        }
    }

    const initialValues = {
        name: "",
        value: "",
        email: "",
        phone: ""
    }

    const [day, setDay] = React.useState('');
    const handleChange = (event) => {
        setDay(event.target.value);
      };

      const [criteria, setCriteria] = React.useState('');
    const handlechange = (event) => {
        setCriteria(event.target.value);
      };

    return(

        <Grid>
        <Paper style={sign} elevation={20}>
            <Grid >
                <h2>Create Alert</h2>
            </Grid>
            
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            
                            <Field as={TextField} fullWidth required label="Name" name="name"/>
                            <FormLabel id="demo-row-radio-buttons-group-label">Criteria</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"

                            >
                            <Field as={FormControlLabel} value="Greater than" control={<Radio />} label="Greater" />
                            <Field as={FormControlLabel} value="Less than" control={<Radio />} label="Less" />
                            </RadioGroup>
                            
                            <Field as={TextField} fullWidth required label="Value" name="value"/>

                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Day" value={day} onChange={handleChange} >
                            <Field as={MenuItem} value="Everyday">Everyday</Field>
                            <Field as={MenuItem} value="Monday">Monday</Field>
                            </Select>
                            <br></br>
                            <InputLabel id="demo-simple-select-label">Criteria</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="criteria" value={criteria} onChange={handlechange} >
                            <Field as={MenuItem} value="DK1" fullWidth>DK1</Field>

                            </Select>

                            
                            <Field as={TextField} fullWidth required label="Email" name="email"/>
                            <Field as={TextField} fullWidth required label="Phone" name="phone"/>
                            <Button type="submit" variant="contained" color="primary" style={bt}>Sign Up</Button>
                        </Form>
                    )}
                </Formik>
        </Paper>
    </Grid>
            
        // <Grid>
        //     <Paper style={paperstyle}>
        //         <h2>Create Alert</h2>
        //         <Formik>
        //             <Form>
        //                 <Field as={TextField} name="username" placeholder="Name" fullWidth required/>
        //                 <Field as={FormControlLabel} />
        //                 <Field as={TextField} name="value" placeholder="Value" fullWidth required/>
        //             </Form>
                
        //         </Formik>
        //     </Paper>
        // </Grid>
    )
}

export default Peak;