import React, {Component} from 'react';
import {Drawer} from 'material-ui';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";
import classes from './LeftMenu.module.css';
import Storage from '../../app-storage';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: {
                authed: [
                    {link: '/', name: 'Профиль', icon: 'user-circle'},
                    {link: '/logout', name: 'Выйти', icon: 'sign-out-alt'},
                ],
                notAuthed: [
                    {link: '/', name: 'Главная', icon: 'home'},
                    {link: '/login', name: 'Войти', icon: 'sign-out-alt'},
                ]
            }
        }
    }

    render() {
        let menuItems = Storage.auth() ? this.state.menuItems.authed : this.state.menuItems.notAuthed;
        return (
            <Drawer open={this.props.drawerIsOpen}
                    docked={false}
                    overlayStyle={{opacity: '0'}}
                    containerStyle={{height: '20%', top: '50px'}}
                    onRequestChange={(e) => this.props.leftMenuToogle(false)}>
                <List component="nav"
                      onClick={(e) => this.props.leftMenuToogle(false)}
                      onKeyDown={(e) => this.props.leftMenuToogle(false)}>
                    {menuItems.map((item, index) => (
                        <NavLink to={item.link} key={index} style={{textDecoration: 'none'}} activeClassName={classes.active}>
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={item.icon}/>
                                </ListItemIcon>
                                <ListItemText disableTypography primary={item.name} className={classes.menuItemText}/>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </Drawer>
        );
    }
}

export default LeftMenu;
