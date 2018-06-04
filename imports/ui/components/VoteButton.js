import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import store from '../../store/store'
import { toggleLogin } from '../../actions/login'

import { VOTE_POST } from '../../api/graphql/mutations'

class VoteButton extends Component {
    state = {
        upvote: false,
        downvote: false
    }

    upvote = () => {
        if (Meteor.user() === null) {
            store.dispatch(toggleLogin())
        } else if (
            !this.state.upvote &&
            !this.state.downvote &&
            Meteor.user() !== null
        ) {
            this.setState({ upvote: true, downvote: false })
            this.props.votePost({
                variables: {
                    postId: this.props.postId,
                    vote: 1
                }
            })
        } else if (this.state.downvote && Meteor.user() !== null) {
            this.setState({ upvote: true, downvote: false })
            this.props.votePost({
                variables: {
                    postId: this.props.postId,
                    vote: 2
                }
            })
        }
    }
    downvote = () => {
        if (Meteor.user() === null) {
            store.dispatch(toggleLogin())
        } else if (
            !this.state.downvote &&
            !this.state.upvote &&
            Meteor.user() !== null
        ) {
            this.setState({ upvote: false, downvote: true })
            this.props.votePost({
                variables: {
                    postId: this.props.postId,
                    vote: -1
                }
            })
        } else if (this.state.upvote && Meteor.user() !== null) {
            this.setState({ upvote: false, downvote: true })
            this.props.votePost({
                variables: {
                    postId: this.props.postId,
                    vote: -2
                }
            })
        }
    }

    render() {
        return (
            <Col>
                <Row>
                    <Icon
                        type="caret-up"
                        onClick={this.upvote}
                        style={{
                            fontSize: 17,
                            color: this.state.upvote ? 'black' : '#6c7584'
                        }}
                    />
                </Row>
                <Row style={{ marginTop: -4.5, marginBottom: -3.5 }}>
                    <p
                        style={{
                            marginTop: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            marginLeft: 4
                        }}
                    >
                        {this.props.likes}
                    </p>
                </Row>
                <Row>
                    <Icon
                        type="caret-down"
                        onClick={this.downvote}
                        style={{
                            fontSize: 17,
                            color: this.state.downvote ? 'black' : '#6c7584'
                        }}
                    />
                </Row>
            </Col>
        )
    }
}

export default graphql(VOTE_POST, {
    name: 'votePost',
    options: {
        refetchQueries: ['Posts']
    }
})(VoteButton)
