import React, {Component} from 'react';
import _ from 'lodash';
import Storage from '../../../app-storage';
import ReactTable from "react-table";
import config from '../../../config';
import Moment from "react-moment";
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import api from '../../../api';
import noty from "../../../helpers/notifications";
import {Link} from 'react-router-dom';

class Hospital extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            hospitalInfo: [],
        }
    }

    componentDidMount() {
        // piece of shit
        api.get('hospitals').then(res => {
            let hospital = Storage.user() || [];
            let currentHospital = _.find(res.data, {id: _.get(hospital, 'id')});
            this.setState({hospitalInfo: currentHospital});
            this.setState({patients: _.get(currentHospital, 'Patients', [])});
        }).catch(e => {
            this.setState({hospitalInfo: []});
            this.setState({patients: []});
        });
    };

    remove(index, id) {
        // bad code (no time)
        let newPatients = this.state.patients;
        newPatients.splice(index, 1);
        this.setState({patients: newPatients});
        noty.show('success', 'Пациент успешно удален');
    };

    render() {
        const columns = [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'Имя',
                accessor: 'full_name'
            },
            {
                Header: 'Адрес',
                accessor: 'address'
            },
            {
                Header: 'Телефон',
                accessor: 'phone'
            },
            {
                Header: 'Зарегестрировано',
                accessor: 'created_at',
                Cell: props => (<Moment fromNow>{props.original.created_at}</Moment>)
            },
            {
                id: 'view',
                header: '',
                sortable: false,
                Cell: props => (
                    <div>
                        <Link to={'/hospital/patient/' + props.original.id}>
                            <Button variant="contained" color="primary">
                                <FontAwesomeIcon icon="eye"/>
                            </Button>
                        </Link>
                        <Button variant="contained" color="secondary" style={{marginLeft: '10px'}}
                                onClick={(ev, value) => this.remove(props.index, props.original.id)}>
                            <FontAwesomeIcon icon="trash"/>

                        </Button>
                    </div>
                )
            },
        ];
        return (
            <div>
                <h1>&nbsp;Зарегестрированые пациенты:</h1>
                <ReactTable
                    data={this.state.patients}
                    columns={columns}
                    defaultPageSize={5}
                    {...config.reactTable.translations}
                />
            </div>
        );
    }
}

export default Hospital;
