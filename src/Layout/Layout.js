import React, {Component} from 'react';
import {AppBar} from 'material-ui';

class Layout extends Component {
    render() {
        return (
            <div>
                <main>
                    <AppBar
                        title={this.props.title}
                    />
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
