import React, { Component } from 'react'
import { Button, Checkbox, Modal, Form, Input, Icon, Row, Col } from 'antd'

import store from '../../../store/store'
import { toggleLogin } from '../../../actions/login'

class Register extends Component {
    registerUser = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                Accounts.createUser(
                    { email: values.email, password: values.password },
                    err => {
                        if (!err) {
                            console.log('Account created!')
                            store.dispatch(toggleLogin())
                        } else {
                            console.log(err)
                        }
                    }
                )
            } else {
                console.log(err)
            }
        })
        console.log('submitted')
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form
        if (value && value !== form.getFieldValue('password')) {
            callback('Passwords do not match!')
        } else {
            callback()
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Form onSubmit={this.registerUser}>
                <Row style={{ marginTop: 28 }}>
                    <Col offset={4}>
                        <h1>Register</h1>
                    </Col>
                </Row>
                <Row style={{ marginTop: 25 }}>
                    <Col span={16} offset={4}>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your email'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="mail"
                                            style={{
                                                color: 'rgba(0,0,0,.25)'
                                            }}
                                        />
                                    }
                                    placeholder="Email"
                                />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={16} offset={4}>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{
                                                color: 'rgba(0,0,0,.25)'
                                            }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={16} offset={4}>
                        <Form.Item>
                            {getFieldDecorator('passwordConfirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password'
                                    },
                                    {
                                        validator: this.compareToFirstPassword
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{
                                                color: 'rgba(0,0,0,.25)'
                                            }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Row>
                        <Col span={16} offset={4}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: '100%' }}
                            >
                                Sign Up
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(Register)
