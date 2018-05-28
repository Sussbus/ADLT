import React, { Component } from 'react'
import { Button, Card, Row, Col, Form, Input, Popconfirm, message } from 'antd'
import { connect } from 'react-redux'

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 7 }
    }
}

class Settings extends Component {
    updateUserSettings = () => {
        message.success('Settings updated')
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { user } = this.props

        return (
            <Col span={20} offset={2} style={{ paddingTop: 20 }}>
                <Card title={<h2>Settings</h2>}>
                    <Form layout="horizontal">
                        <Form.Item label="First Name" {...formItemLayout}>
                            {getFieldDecorator('firstName', {
                                rules: [
                                    {
                                        message: 'Please enter your first name'
                                    }
                                ]
                            })(<Input placeholder="John" />)}
                        </Form.Item>
                        <Form.Item label="Last Name" {...formItemLayout}>
                            {getFieldDecorator('lastName', {
                                rules: [
                                    {
                                        message: 'Please enter last name'
                                    }
                                ]
                            })(<Input placeholder="Appleseed" />)}
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            {...formItemLayout}
                            validateStatus="warning"
                            help={
                                <p>
                                    Please verify your email. Click{' '}
                                    <a
                                        style={{
                                            fontWeight: '700',
                                            color: 'orange'
                                        }}
                                    >
                                        here
                                    </a>{' '}
                                    to resend varification email.
                                </p>
                            }
                        >
                            {getFieldDecorator('email', {
                                initialValue:
                                    undefined === user.emails
                                        ? 'loading...'
                                        : user.emails[0].address,
                                rules: [
                                    {
                                        message: 'Please enter your email'
                                    }
                                ]
                            })(<Input placeholder="your@email.com" />)}
                        </Form.Item>
                        <Form.Item label="Bio" {...formItemLayout}>
                            {getFieldDecorator('bio', {
                                rules: [
                                    {
                                        message: 'Please enter your profile bio'
                                    }
                                ]
                            })(
                                <Input.TextArea
                                    placeholder="Enter your bio here..."
                                    autosize={{ minRows: 2, maxRows: 6 }}
                                    style={{ marginTop: 8 }}
                                />
                            )}
                        </Form.Item>
                    </Form>
                </Card>

                <Button
                    type="primary"
                    onClick={this.updateUserSettings}
                    style={{ marginLeft: 5, marginTop: 10, marginBottom: 8 }}
                >
                    Update
                </Button>

                <Card title={<h2>Delete Account</h2>} style={{ marginTop: 20 }}>
                    <Col span={22}>
                        <p>
                            Looking to take a break from the website? Delete
                            your account here.
                        </p>
                    </Col>
                    <Col span={2}>
                        <Popconfirm
                            title="Are you sure?"
                            onConfirm={() => console.log('account deleted...')}
                        >
                            <Button type="danger">Delete Account</Button>
                        </Popconfirm>
                    </Col>
                </Card>
            </Col>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const wrappedSettings = connect(mapStateToProps)(Settings)

export default Form.create()(connect(mapStateToProps)(wrappedSettings))
