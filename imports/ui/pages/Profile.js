import React from 'react'
import { Col } from 'antd'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Post from '../components/Post'

const Profile = ({ loading, user }) => {
    return (
        <Col span={20} offset={2}>
            <h1>Profile</h1>
            {!loading ? (
                user.posts.map(post => (
                    <Post
                        key={post._id}
                        category={post.category}
                        body={post.body}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </Col>
    )
}

const profileQuery = gql`
    query User {
        user {
            _id
            email
            posts {
                _id
                body
            }
        }
    }
`

export default graphql(profileQuery, {
    props: ({ data }) => ({ ...data })
})(Profile)
