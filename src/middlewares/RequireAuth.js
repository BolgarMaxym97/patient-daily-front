import React, {Component} from 'react';
import Storage from '../app-storage';

export default function (ComposedComponent) {

    class RequireAuth extends Component {

        componentWillMount() {
            if (!Storage.auth()) {
                return this.props.history.push('/login');
            }
        }

        render() {
            return <ComposedComponent {...this.props}/>
        }

    }

    return RequireAuth

}