import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { withState, withHandlers, compose } from 'recompose'
import { connect } from 'react-redux'

import store from '../../store/store'
import { toggleLogin } from '../../actions/login'
import { logout } from '../../actions/auth'

const NavBar = ({ handleClick, current, user }) => {
    let isLoggedIn = Object.keys(user).length > 0

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home">
                <Icon type="home" />Home
            </Menu.Item>
            <Menu.Item key="happenings">
                <Icon type="schedule" />Happenings
            </Menu.Item>
            <Menu.Item key="sights">
                <Icon type="environment-o" />Sights
            </Menu.Item>
            {!isLoggedIn ? (
                <Menu.Item key="login">
                    <Icon type="login" />Login
                </Menu.Item>
            ) : (
                <Menu.SubMenu title="Account">
                    <Menu.Item key="profile">Profile</Menu.Item>
                    <Menu.Item key="settings">Settings</Menu.Item>
                    <Menu.Item key="help">Help</Menu.Item>
                    <Menu.Item key="logout">Log Out</Menu.Item>
                </Menu.SubMenu>
            )}
        </Menu>
    )
}

const withLocalState = withState('current', 'changeNav', '/')

const withLocalHandlers = withHandlers({
    handleClick: props => event => {
        if (event.key != 'login' && event.key != 'home') {
            props.history.push('/' + event.key)
            props.changeNav(event.key)
        }
        if (event.key == 'home') {
            props.history.push('/')
            props.changeNav(event.key)
        }
        if (event.key == 'logout') {
            store.dispatch(logout())
            props.history.push('/')
        }
        if (event.key == 'login') {
            store.dispatch(toggleLogin())
        }
    }
})

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default compose(withRouter, withLocalState, withLocalHandlers)(
    connect(mapStateToProps)(NavBar)
)
