import React, {Component} from 'react';
import Storage from '../app-storage';

class Logout extends Component {
    componentDidMount() {
        Storage._set('auth', false);
        Storage._set('user', {});
        return this.props.history.push('/login');
    }

    render() {
        return (<div>logout</div>)
    }
}

export default Logout;