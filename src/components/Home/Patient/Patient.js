import React, {Component} from 'react';
import api from '../../../api';
class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientInfo: {},
        }
    };

    componentDidMount() {
        api.get('/patients/' + this.props.match.params.id).then(res => {
            this.setState({patientInfo: res.data})
        })

    };

    render() {
        console.log(this.state.patientInfo);
        return (
            <h1>&nbsp;Информация по пациенту: </h1>
        );
    }
}

export default Patient;
