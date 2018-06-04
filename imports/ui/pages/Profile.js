import React from 'react'
import { Col } from 'antd'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Post from '../components/Post'
import Loading from '../components/Loading'

const Profile = ({ loading, user }) => {
    return (
        <Col span={20} offset={2} style={{ paddingTop: 20 }}>
            <h1>Profile</h1>
            {loading ? (
                <Loading />
            ) : (
                user.posts.map(post => (
                    <Post
                        key={post._id}
                        body={post.body}
                        category={post.category}
                        likes={post.likes}
                        postId={post._id}
                    />
                ))
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
                category
                likes
            }
        }
    }
`

export default graphql(profileQuery, {
    props: ({ data }) => ({ ...data })
})(Profile)
