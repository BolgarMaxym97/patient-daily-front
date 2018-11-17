import React, {Component} from 'react';
import Hospital from '../../components/Home/Hospital/Hospital';
import Patient from '../../components/Home/Patient/Patient';
import Storage from '../../app-storage';


class Home extends Component {

    componentDidMount() {
        document.title = 'Домашняя страница';
    }

    render() {
        return (
            <div>
                {(Storage.isHospital()) ? <Hospital/> : <Patient/>}
            </div>
        );
    }
}

export default Home;
