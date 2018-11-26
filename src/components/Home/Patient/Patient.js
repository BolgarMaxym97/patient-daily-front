import React, {Component} from 'react';
import api from '../../../api';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'react-moment';
import {RaisedButton} from "material-ui";
import {Link} from 'react-router-dom';

class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patient: {},
            patientInfo: [],
        }
    };

    componentDidMount() {
        api.get('/patients/' + this.props.match.params.id).then(res => {
            this.setState({patientInfo: res.data.PatientInfo});
            this.setState({patient: res.data});
        })

    };

    render() {
        console.log(this.state.patientInfo);
        return (
            <div>
                <h1>&nbsp;Информация по пациенту {this.state.patient.full_name}: </h1>
                <Link to={'/hospital/patient/create-info/' + this.props.match.params.id}>
                    <RaisedButton label="Внести запись" primary style={{margin: '10px'}}/>
                </Link>
                {this.state.patientInfo.map(function (infoItem, index) {
                    return (
                        <Card style={{margin: '10px 10px'}} key={index}>
                            <CardContent>
                                <p color="textSecondary" style={{color: 'grey', fontSize: '12px'}}>
                                    <Moment locale="ru" fromNow>{infoItem.date}</Moment>
                                </p>
                                <h2>
                                    {infoItem.name}
                                </h2>
                                <hr/>
                                <p>
                                    {infoItem.text}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        );
    }
}

export default Patient;
