import React, {Component} from 'react';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import {withRouter } from "react-router-dom";
import {AppBar} from 'material-ui';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserCircle, faSlidersH, faSignOutAlt, faHome} from '@fortawesome/free-solid-svg-icons';
import './Layout.css';

library.add(faUserCircle, faSlidersH, faSignOutAlt, faHome);


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerIsOpen: false,
            title: 'Дневник пациента',
        }
    }

    leftMenuToogle = (state) => {
        return this.setState({drawerIsOpen: state});
    };

    render() {
        const theme = getMuiTheme({
            palette: {
                primary1Color: '#673ab7',
                primary2Color: '#482880',
                primary3Color: '#8561c5',
                accent1Color: '#00e676',
                accent2Color: '#00a152',
                accent3Color: '#33eb91',
            },
        });

        return (
            <MuiThemeProvider muiTheme={theme}>
                <div style={{backgroundColor: '#eeeeee', height: '100%'}}>
                    <main>
                        <AppBar
                            title={this.state.title}
                            onLeftIconButtonClick={(e) => this.setState({drawerIsOpen: true})}
                        />
                        <LeftMenu drawerIsOpen={this.state.drawerIsOpen} leftMenuToogle={this.leftMenuToogle}/>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(Layout);
