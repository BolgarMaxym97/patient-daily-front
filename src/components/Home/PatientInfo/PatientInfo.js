import React, {Component} from 'react';
import api from '../../../api';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {RaisedButton} from "material-ui";
import {Link} from 'react-router-dom';

class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientInfo: {},
        }
    };

    render() {
        console.log(this.state.patientInfo);
        return (
            <div>
                <h1>&nbsp;Создание записи: </h1>
                <Link to={'/hospital/patient/' + this.props.match.params.id}>
                    <RaisedButton label="Назад" secondary style={{margin: '10px'}}/>
                </Link>
                <Card style={{margin: '10px 10px'}}>
                    <CardContent>
                        12312312
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Patient;
