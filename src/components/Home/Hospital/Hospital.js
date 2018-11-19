import React, {Component} from 'react';
import _ from 'lodash';
import Storage from '../../../app-storage';

class Hospital extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            hospitalInfo: [],
        }
    }

    componentDidMount() {
        this.setState({hospitalInfo: _.get(Storage.user(), [])});
        this.setState({patients: _.get(Storage.user(), 'Patients', [])});
    };

    render() {
        console.log(this.state.patients);
        return (
            <h1>Главная страница больницы</h1>
        );
    }
}

export default Hospital;
