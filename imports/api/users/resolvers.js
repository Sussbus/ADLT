import { Accounts } from 'meteor/accounts-base'

import Posts from '../Posts/posts'

export default {
    Query: {
        user(obj, args, { user }) {
            return user || {}
        }
    },

    User: {
        email: user => user.emails[0].address,
        posts: user => Posts.find({ userId: user._id }).fetch()
    },

    Mutation: {
        updateFirstName(obj, { newFirstName }, { userId }) {
            const user = Meteor.users.findOne(userId)
            Meteor.users.update(userId, {
                $set: { 'profile.name.first': newFirstName }
            })

            return user
        },

        updateLastName(obj, { newLastName }, { userId }) {
            const user = Meteor.users.findOne(userId)
            Meteor.users.update(userId, {
                $set: { 'profile.name.last': newLastName }
            })

            return user
        },

        updateEmail(obj, { newEmail }, { userId }) {
            const user = Meteor.users.findOne(userId)
            Meteor.users.update(userId, {
                $set: { 'emails.0.address': newEmail }
            })

            return user
        },

        updateBio(obj, { newBio }, { userId }) {
            const user = Meteor.users.findOne(userId)
            Meteor.users.update(userId, {
                $set: { 'profile.bio': newBio }
            })

            return user
        }
    }
}
