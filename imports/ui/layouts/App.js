import React, { Component } from 'react'
import { Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import { Layout, Footer } from 'antd'

import store from '../../store/store'

import Home from '../pages/Home'
import Happenings from '../pages/Happenings'
import Sights from '../pages/Sights'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import NotFound from '../pages/NotFound'

import NavBar from '../components/NavBar'
import LoginRegisterContainer from '../components/LoginRegister/LoginRegisterContainer'

const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
    render() {
        const isAuthenticated = Meteor.user() !== null

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/'
                            }}
                        />
                    )
                }
            />
        )

        return (
            <Layout
                style={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: 'column'
                }}
            >
                <Router history={browserHistory}>
                    <div style={{ flex: 1 }}>
                        <NavBar />
                        <LoginRegisterContainer />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/happenings"
                                component={Happenings}
                            />
                            <Route exact path="/sights" component={Sights} />
                            <PrivateRoute
                                exact
                                path="/profile"
                                component={Profile}
                            />
                            <PrivateRoute
                                exact
                                path="/settings"
                                component={Settings}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
                <Layout.Footer id="test" style={{ textAlign: 'center' }}>
                    &copy; 2018 Company Inc. | About | Terms of Service |
                    Privacy Policy
                </Layout.Footer>
            </Layout>
        )
    }
}

export default App
