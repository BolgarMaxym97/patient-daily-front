import React, {Component} from 'react';

class Home extends Component {

    componentDidMount() {
        document.title = 'Домашняя страница';
    }

    render() {
        return (
            <h1>Главная страница</h1>
        );
    }
}

export default Home;
