import React, {Component} from 'react';
import {AppBar, Drawer} from 'material-ui';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerIsOpen: false,
            menuItems: [
                {route: '/profile/bio', text: 'bio'},
                {route: '/profile/photos', text: 'photos'},
                {route: '/profile/videos', text: 'videos'},
                {route: '/profile/filmography', text: 'filmography'},
                {route: '/profile/settings', text: 'settings'},
                {route: '/profile/accounts', text: 'accounts'}
            ]
        }
    }

    render() {
        return (
            <div>
                <main>
                    <AppBar
                        title={this.props.title}
                        onLeftIconButtonClick={(e) => this.setState({drawerIsOpen: true})}
                    />
                    <Drawer open={this.state.drawerIsOpen}
                            docked={false}
                            overlayStyle={{opacity: '0'}}
                            onRequestChange={(e) => this.setState({drawerIsOpen: false})}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={(e) => this.setState({drawerIsOpen: false})}
                            onKeyDown={(e) => this.setState({drawerIsOpen: false})}
                        >
                            x
                        </div>
                    </Drawer>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
