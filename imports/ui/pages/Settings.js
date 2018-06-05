import React, { Component } from 'react'
import { Button, Card, Row, Col, Form, Input, Popconfirm, message } from 'antd'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

import {
    UPDATE_EMAIL,
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_BIO
} from '../../api/graphql/mutations'

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
        this.props.form.validateFields((error, values) => {
            if (!error) {
                if (values.firstName != this.props.user.profile.name.first) {
                    this.props.updateFirstName({
                        variables: {
                            newFirstName: values.firstName
                        }
                    })
                    message.success('First name updated')
                }
                if (values.lastName != this.props.user.profile.name.last) {
                    this.props.updateLastName({
                        variables: {
                            newLastName: values.lastName
                        }
                    })
                    message.success('Last name updated')
                }
                if (values.email != this.props.user.emails[0].address) {
                    this.props.updateEmail({
                        variables: {
                            newEmail: values.email
                        }
                    })
                    message.success('Email updated')
                }
                if (values.bio != this.props.user.profile.bio) {
                    this.props.updateBio({
                        variables: {
                            newBio: values.bio
                        }
                    })
                    message.success('Bio updated')
                }
            } else {
                console.log(error)
            }
        })
    }

    resendVerificationEmail = () => {
        message.success('Verification email has been sent')
        console.log('resending verification email...')
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
                                initialValue:
                                    user.profile === undefined
                                        ? 'loading...'
                                        : user.profile.name.first,
                                rules: [
                                    {
                                        message: 'Please enter your first name'
                                    }
                                ]
                            })(<Input placeholder="John" />)}
                        </Form.Item>
                        <Form.Item label="Last Name" {...formItemLayout}>
                            {getFieldDecorator('lastName', {
                                initialValue:
                                    user.profile === undefined
                                        ? 'loading...'
                                        : user.profile.name.last,
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
                                        onClick={this.resendVerificationEmail}
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
                                initialValue:
                                    user.profile === undefined
                                        ? 'loading...'
                                        : user.profile.bio,
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

const withRedux = connect(mapStateToProps)

const withForm = Form.create()

const withMutation = compose(
    graphql(UPDATE_FIRST_NAME, {
        name: 'updateFirstName'
    }),
    graphql(UPDATE_LAST_NAME, {
        name: 'updateLastName'
    }),
    graphql(UPDATE_EMAIL, {
        name: 'updateEmail'
    }),
    graphql(UPDATE_BIO, {
        name: 'updateBio'
    })
)

export default compose(withRedux, withForm, withMutation)(Settings)
