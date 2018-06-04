import gql from 'graphql-tag'

export const CREATE_POST = gql`
    mutation createPost($body: String!, $category: String!) {
        createPost(body: $body, category: $category) {
            _id
        }
    }
`

export const VOTE_POST = gql`
    mutation votePost($postId: String!, $vote: Int!) {
        votePost(postId: $postId, vote: $vote) {
            _id
        }
    }
`
