import Posts from './posts'

export default {
    Query: {
        posts(obj, args, context) {
            return Posts.find({}).fetch()
        }
    },

    Mutation: {
        createPost(obj, { body }, { userId }) {
            const postId = Posts.insert({
                body,
                userId
            })
            return Posts.findOne(postId)
        }
    }
}
