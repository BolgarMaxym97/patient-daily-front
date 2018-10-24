import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {TextField, SelectField, MenuItem} from 'material-ui';
import classes from './Patient.module.css';
import api from "../../../api";

class PatientContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hospitals: [],
        };
    }

    componentDidMount() {
        document.title = "Registration";
        return api.get('hospitals-info')
            .then(res => {
                let hospitals = [];
                res.data.map(function (hospital) {
                    return hospitals.push({
                        id: hospital.id,
                        hospital_name: hospital.hospital_name,
                    })
                });
                return this.setState({hospitals})
            });
    }

    render() {
        return (
            <div>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Enter your Full Name"
                        floatingLabelText="Full Name"
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <SelectField floatingLabelText="Your hospital">
                        {this.state.hospitals.map(function (hospital) {
                            return (
                                <MenuItem value={hospital.id} primaryText={hospital.hospital_name} key={hospital.id}/>
                            )
                        })}
                    </SelectField>
                </Grid>
            </div>
        )
    }
}

export default PatientContent;