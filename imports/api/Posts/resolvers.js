import Posts from './posts'

export default {
    Query: {
        posts(obj, args, context) {
            return Posts.find({}).fetch()
        }
    },

    Post: {
        likes: post =>
            Posts.findOne({ _id: post._id }, { fields: { _id: 0, likes: 1 } })
                .likes
    },
    Mutation: {
        createPost(obj, { body, category }, { userId }) {
            const postId = Posts.insert({
                body,
                category,
                userId,
                likes: 0
            })
            return Posts.findOne(postId)
        },
        votePost(obj, { postId, vote }, context) {
            const post = Posts.findOne(postId)
            Posts.update(post, { $inc: { likes: vote } })
            return post
        }
    }
}
