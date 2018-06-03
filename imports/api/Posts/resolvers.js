import Posts from './posts'

export default {
    Query: {
        posts(obj, args, context) {
            return Posts.find({}).fetch()
        }
    },

    Mutation: {
        createPost(obj, { body, category }, { userId }) {
            const postId = Posts.insert({
                body,
                category,
                userId
            })
            return Posts.findOne(postId)
        }
    }
}
