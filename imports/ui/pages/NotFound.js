import React, { Component } from 'react'
import Lottie from 'react-lottie'
import { Row, Col } from 'antd'

import animationData from '../../assets/lotties/empty_box.json'

class NotFound extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData
        }

        return (
            <Row style={{ paddingTop: '8%' }} type="flex" justify="center">
                <h1>Sorry, but this page doesn't exist...</h1>
                <Lottie
                    options={defaultOptions}
                    height={200}
                    isStopped={false}
                    isPaused={false}
                />
            </Row>
        )
    }
}

export default NotFound
