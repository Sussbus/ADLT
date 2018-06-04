import React from 'react'
import { Row, Col } from 'antd'
import Lottie from 'react-lottie'

import * as animationData from '../../assets/lotties/loading.json'

const defaultOptions = {
    animationData: animationData,
    autoplay: true,
    loop: true
}

const Loading = () => {
    return (
        <Row type="flex" justify="center">
            <Lottie
                width={280}
                options={defaultOptions}
                isPaused={false}
                isStopped={false}
            />
        </Row>
    )
}

export default Loading
