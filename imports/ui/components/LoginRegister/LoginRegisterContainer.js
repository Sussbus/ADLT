import React, { Component } from 'react'
import { Button, Col, Modal } from 'antd'
import { connect } from 'react-redux'

import store from '../../../store/store'
import { toggleLogin } from '../../../actions/login'

import Login from './Login'
import Register from './Register'

class LoginRegisterContainer extends Login {
    state = {
        isLogin: true
    }
    toggleLogin = () => {
        this.setState({ isLogin: !this.state.isLogin })
    }

    render() {
        return (
            <Modal
                title={null}
                visible={this.props.loginOpen}
                onCancel={() => store.dispatch(toggleLogin())}
                footer={null}
                bodyStyle={{ height: 450 }}
            >
                {this.state.isLogin ? <Login /> : <Register />}
                {this.state.isLogin ? (
                    <Col offset={4}>
                        Or <a onClick={this.toggleLogin}>register now!</a>
                    </Col>
                ) : (
                    <Col offset={4}>
                        Already have an acount?{' '}
                        <a onClick={this.toggleLogin}>login</a>
                    </Col>
                )}
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginOpen: state.login.loginOpen
    }
}

export default connect(mapStateToProps)(LoginRegisterContainer)
