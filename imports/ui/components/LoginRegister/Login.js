import React, { Component } from 'react'
import { Button, Checkbox, Modal, Form, Input, Icon, Row, Col } from 'antd'

import store from '../../../store/store'
import { toggleLogin } from '../../../actions/login'

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log(values)
                Meteor.loginWithPassword(values.email, values.password, err => {
                    if (!err) {
                        console.log('User logged in')
                        store.dispatch(toggleLogin())
                    } else {
                        console.log(err)
                    }
                })
            } else {
                console.log(err)
            }
        })
        console.log('submitted')
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row style={{ marginTop: 28 }}>
                    <Col offset={4}>
                        <h1>Login</h1>
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
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Col span={10} offset={4}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    )}
                    <Col span={6}>
                        <a href="#" style={{ float: 'right' }}>
                            Forgot password
                        </a>
                    </Col>
                    <Row style={{ marginTop: 8 }}>
                        <Col span={16} offset={4}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: '100%' }}
                            >
                                Log in
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(Login)
