import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import LeftMenu from '../../components/LeftMenu/LeftMenu'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerIsOpen: false,
        }
    }

    leftMenuToogle = (state) => {
      return this.setState({drawerIsOpen: state});
    };

    render() {
        return (
            <div>
                <main>
                    <AppBar
                        title={this.props.title}
                        onLeftIconButtonClick={(e) => this.setState({drawerIsOpen: true})}
                    />
                   <LeftMenu drawerIsOpen={this.state.drawerIsOpen} leftMenuToogle={this.leftMenuToogle}/>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
