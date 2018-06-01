import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import PostsSchema from '../../api/Posts/Posts.graphql'
import PostsResolvers from '../../api/Posts/resolvers'

import UsersSchema from '../../api/users/User.graphql'
import UsersResolvers from '../../api/users/resolvers'
//
const typeDefs = [PostsSchema, UsersSchema]

const resolvers = merge(PostsResolvers, UsersResolvers)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema })
