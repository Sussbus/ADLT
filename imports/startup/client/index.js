import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { ApolloCache } from 'apollo-cache'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

import 'antd/dist/antd.min.css'

import store from '../../store/store'
import { loadUser } from '../../actions/auth'

import App from '../../ui/layouts/App'

const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl('graphql')
})

const authLink = new ApolloLink((operation, forward) => {
    const token = Accounts._storedLoginToken()
    operation.setContext(() => ({
        headers: {
            'meteor-login-token': token
        }
    }))
    return forward(operation)
})

const cache = new InMemoryCache()

const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache
})

Meteor.startup(() => {
    store.dispatch(loadUser())
    render(
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>,
        document.getElementById('render-target')
    )
})
