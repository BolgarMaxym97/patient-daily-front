import React, {Component} from 'react';
import {Drawer} from 'material-ui';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classes from './LeftMenu.module.css';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {link: '/profile', name: 'Profile', icon: 'user-circle'},
                {link: '/settings', name: 'Settings', icon: 'sliders-h'},
                {link: '/logout', name: 'Logout', icon: 'sign-out-alt'},
            ]
        }
    }

    render() {
        return (
            <Drawer open={this.props.drawerIsOpen}
                    docked={false}
                    overlayStyle={{opacity: '0'}}
                    containerStyle={{height: '20%', top: '50px'}}
                    onRequestChange={(e) => this.props.leftMenuToogle(false)}>
                <List component="nav"
                      onClick={(e) => this.props.leftMenuToogle(false)}
                      onKeyDown={(e) => this.props.leftMenuToogle(false)}>
                    {this.state.menuItems.map((item, index) => (
                        <ListItem component="a" href={item.link} key={index}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={item.icon}/>
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
