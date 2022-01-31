import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Drawer, makeStyles, List, ListItem, ListItemIcon, ListItemText, Grid, Paper, Divider, Container, Typography} from '@material-ui/core';
import Dashboard from '@material-ui/icons/Dashboard';
import Key from '@material-ui/icons/VpnKey';
import LightbulbIcon from '@material-ui/icons/EmojiObjects';
import AcUnit from '@material-ui/icons/AcUnit';
import Signinout from '../containers/index';
import Peak from '../containers/peak';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {width: 'inherit'},
    link: {textDecoration: 'none', color: theme.palette.text.primary}
}))


const Responsivedrawer = () => {
    const classes = useStyles();
    return(
        <Router>
            <div style={{display: 'flex'}}>
                <Drawer
                 style={{width: '260px'}}
                 variant="persistent"
                 anchor="left"
                 open={true}
                 classes={{paper: classes.drawerPaper}}
                >
                    <List>
                        <ListItem>
                            <ListItemText>
                                Grid Manager 2.0
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle"/>

                        <Link to="/" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItem>
                        </Link>

                        <Grid>
                            <Paper style={{margin: '20px'}} elevation={10}>
                            <ListItem button>
                                    <ListItemIcon><Key /></ListItemIcon>
                                    <ListItemText primary="E3 Apps"/>
                            </ListItem>
                            
                            <Link to="/peak" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><LightbulbIcon /></ListItemIcon>
                                <ListItemText primary="Peak Shaving & Alert"/>
                            </ListItem>
                            </Link>

                            <ListItem button>
                                <ListItemIcon><AcUnit /></ListItemIcon>
                                <ListItemText primary="Ventilation"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><Key /></ListItemIcon>
                                <ListItemText primary="Cooling"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><Key /></ListItemIcon>
                                <ListItemText primary="Heat Pump"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><Key /></ListItemIcon>
                                <ListItemText primary="Out of Hours"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><Key /></ListItemIcon>
                                <ListItemText primary="Ev Charging"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><Key /></ListItemIcon>
                                <ListItemText primary="Load Shifting"/>
                            </ListItem>

                            </Paper>
                        </Grid>
                    </List>

                </Drawer>

                <Routes>
                    <Route exact path="/">
                        Dashboard
                    </Route>

                    <Route exact path="/peak" element={<Peak/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default Responsivedrawer;