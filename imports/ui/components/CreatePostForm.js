import React, { Component } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createPost = gql`
    mutation createPost($body: String!) {
        createPost(body: $body) {
            _id
        }
    }
`

class CreatePostForm extends Component {
    submitForm = () => {
        this.props.form.validateFields((error, values) => {
            if (!error) {
                this.props
                    .createPost({
                        variables: {
                            body: values.postBody
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                console.log(error)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form>
                <Col span={20}>
                    <Form.Item>
                        {getFieldDecorator('postBody', {
                            rules: [
                                {
                                    required: false,
                                    message: 'Your post can not be empty'
                                }
                            ]
                        })(
                            <Input.TextArea
                                type="text"
                                placeholder="Share something with the commmunity..."
                                autosize={{ minRows: 3, maxRows: 6 }}
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col span={3} style={{ marginLeft: 10, paddingTop: '6%' }}>
                    <Button type="primary" onClick={this.submitForm}>
                        Post
                    </Button>
                </Col>
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
