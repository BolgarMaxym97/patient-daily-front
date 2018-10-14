import React, {Component} from 'react';
import {Drawer} from 'material-ui';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import AwesomeIcon from '../../components/AwesomeIcon';
import classes from './LeftMenu.module.css';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {link: '/profile', name: 'Profile', icon: 'icon'},
                {link: '/settings', name: 'Settings', icon: 'icon'},
                {link: '/logout', name: 'Logout', icon: 'icon'},
            ]
        }
    }

    render() {
        return (
            <Drawer open={this.props.drawerIsOpen}
                    docked={false}
                    overlayStyle={{opacity: '0'}}
                    onRequestChange={(e) => this.props.leftMenuToogle(false)}>
                <List component="nav"
                      onClick={(e) => this.props.leftMenuToogle(false)}
                      onKeyDown={(e) => this.props.leftMenuToogle(false)}>
                    {this.state.menuItems.map((item, index) => (
                        <ListItem component="a" href={item.link} key={index}>
                            <ListItemIcon>
                                <AwesomeIcon />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={item.name} className={classes.menuItemText}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }
}

export default LeftMenu;
