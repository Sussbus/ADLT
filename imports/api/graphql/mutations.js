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

export const UPDATE_FIRST_NAME = gql`
    mutation updateFirstName($newFirstName: String!) {
        updateFirstName(newFirstName: $newFirstName) {
            _id
        }
    }
`

export const UPDATE_LAST_NAME = gql`
    mutation updateLastName($newLastName: String!) {
        updateLastName(newLastName: $newLastName) {
            _id
        }
    }
`

export const UPDATE_EMAIL = gql`
    mutation updateEmail($newEmail: String!) {
        updateEmail(newEmail: $newEmail) {
            _id
        }
    }
`

export const UPDATE_BIO = gql`
    mutation updateBio($newBio: String!) {
        updateBio(newBio: $newBio) {
            _id
        }
    }
`
