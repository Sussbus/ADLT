import React, { Component } from 'react'
import { Card, Input, Row, Col } from 'antd'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import CreatePostForm from '../components/CreatePostForm'

import Post from '../components/Post'

const Happenings = ({ loading, posts }) => {
    console.log(posts)
    return (
        <Col span={20} offset={2}>
            <Row style={{ marginBottom: 15 }}>
                <Col span={10} style={{ paddingTop: 20 }}>
                    <CreatePostForm />
                </Col>
            </Row>
            {loading
                ? null
                : posts.map(post => (
                      <Post
                          key={post._id}
                          category={post.category}
                          body={post.body}
                      />
                  ))}
            <Post
                category="Experience"
                body="
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio amet ab
                        temporibus asperiores quasi cupiditate. Voluptatum
                        ducimus voluptates voluptas?"
            />
            <Post
                category="Suggestion"
                body="
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio amet ab
                        temporibus asperiores quasi cupiditate. Voluptatum
                        ducimus voluptates voluptas?"
            />
            <Post
                category="Suggestion"
                body="
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio amet ab
                        temporibus asperiores quasi cupiditate. Voluptatum
                        ducimus voluptates voluptas?"
            />
        </Col>
    )
}

const postsQuery = gql`
    query Posts {
        posts {
            _id
            body
        }
    }
`

export default graphql(postsQuery, {
    props: ({ data }) => ({ ...data })
})(Happenings)
