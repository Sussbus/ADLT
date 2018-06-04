import React, { Component } from 'react'
import { Form, Input, Button, Row, Col, Card, Select } from 'antd'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createPost = gql`
    mutation createPost($body: String!, $category: String!) {
        createPost(body: $body, category: $category) {
            _id
        }
    }
`

class CreatePostForm extends Component {
    state = {
        focused: false
    }

    submitForm = () => {
        this.props.form.validateFields((error, values) => {
            if (!error) {
                this.props
                    .createPost({
                        variables: {
                            body: values.postBody,
                            category: values.category
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                console.log(values)
            } else {
                console.log(error)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form>
                <Card title={null} bodyStyle={{ marginBottom: -30 }}>
                    <Row>
                        <Col span={24}>
                            <Form.Item>
                                {getFieldDecorator('postBody', {
                                    rules: [
                                        {
                                            required: false,
                                            message:
                                                'Your post can not be empty'
                                        }
                                    ]
                                })(
                                    <Input.TextArea
                                        type="text"
                                        placeholder="Share something with the commmunity..."
                                        onFocus={() =>
                                            this.setState({ focused: true })
                                        }
                                        onBlur={() =>
                                            this.setState({ focused: false })
                                        }
                                        autosize={{ minRows: 3, maxRows: 6 }}
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="end">
                        <Col span={5} pull={1}>
                            <Form.Item>
                                {getFieldDecorator('category', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Must enter category'
                                        }
                                    ]
                                })(
                                    <Select placeholder="Category...">
                                        <Select.Option key="Experience">
                                            Experience
                                        </Select.Option>
                                        <Select.Option key="Suggestion">
                                            Suggestion
                                        </Select.Option>
                                        <Select.Option key="Tip">
                                            Tip
                                        </Select.Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={4} style={{ marginRight: -10 }}>
                            <Button
                                type="primary"
                                style={{ width: 90 }}
                                onClick={this.submitForm}
                            >
                                Post
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Form>
        )
    }
}

export default Form.create()(
    graphql(createPost, {
        name: 'createPost',
        options: {
            refetchQueries: ['Posts']
        }
    })(CreatePostForm)
)
