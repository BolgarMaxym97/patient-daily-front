import React from 'react';
import {Grid} from '@material-ui/core';
import {TextField} from 'material-ui';
import classes from './Hospital.module.css';

const HospitalContent = props => (
    <div>
        <Grid item xs={12} className={classes.centerFields}>
            <TextField
                hintText="Enter Hospital Name"
                floatingLabelText="Hospital Name"
            />
        </Grid>
        <Grid item xs={12} className={classes.centerFields}>
            <TextField
                hintText="Enter Main Doctor Name"
                floatingLabelText="Main Doctor Name"
            />
        </Grid>
    </div>
);

export default HospitalContent;