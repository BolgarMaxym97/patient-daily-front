import React, {Component} from 'react';
import _ from 'lodash';
import Storage from '../../../app-storage';
import ReactTable from "react-table";
import config from '../../../config';

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

    view(id) {
        console.log(id);
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
                accessor: 'created_at'
            },
            {
                id: 'view',
                header: '',
                sortable: false,
                Cell: props => (<button onClick={(ev, value) => this.view(props.original.id)}>View</button>)
            },
        ];
        return (
            <div>
                <h1>Главная страница больницы</h1>
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
