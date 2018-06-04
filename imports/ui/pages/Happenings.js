import React, { Component } from 'react'
import { Card, Input, Row, Col } from 'antd'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import CreatePostForm from '../components/CreatePostForm'

import Post from '../components/Post'

const Happenings = ({ loading, posts }) => {
    //console.log(posts)
    return (
        <Col span={20} offset={2}>
            <Row style={{ marginBottom: 15 }}>
                <Col span={10} style={{ paddingTop: 20 }}>
                    {Meteor.user() !== null && <CreatePostForm />}
                </Col>
            </Row>
            {loading
                ? null
                : posts.map(post => (
                      <Post
                          key={post._id}
                          body={post.body}
                          category={post.category}
                          likes={post.likes}
                          postId={post._id}
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
                likes={6}
            />
            <Post
                category="Suggestion"
                body="
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio amet ab
                        temporibus asperiores quasi cupiditate. Voluptatum
                        ducimus voluptates voluptas?"
                likes={4}
            />
            <Post
                category="Suggestion"
                body="
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio amet ab
                        temporibus asperiores quasi cupiditate. Voluptatum
                        ducimus voluptates voluptas?"
                likes={7}
            />
        </Col>
    )
}

const postsQuery = gql`
    query Posts {
        posts {
            _id
            body
            category
            likes
        }
    }
`

export default graphql(postsQuery, {
    props: ({ data }) => ({ ...data })
})(Happenings)
