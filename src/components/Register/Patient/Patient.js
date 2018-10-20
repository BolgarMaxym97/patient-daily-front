import React from 'react';
import {Grid} from '@material-ui/core';
import {TextField} from 'material-ui';
import classes from './Patient.module.css';

const PatientContent = props => (
    <Grid item xs={12} className={classes.centerFields}>
        <TextField
            hintText="Enter your Full Name"
            floatingLabelText="Full Name"
        />
    </Grid>
);

export default PatientContent;