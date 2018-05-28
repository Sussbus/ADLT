import React, { Component } from 'react'
import { Card, Input, Row, Col } from 'antd'

import Post from '../components/Post'

class Happenings extends Component {
    render() {
        return (
            <Col span={20} offset={2}>
                <Row style={{ marginBottom: 15 }}>
                    <Col span={10} style={{ paddingTop: 20 }}>
                        <Input.TextArea
                            placeholder="Got anything you want to share with the community?"
                            autosize={{ minRows: 3, maxRows: 6 }}
                        />
                    </Col>
                </Row>
                <Post category="Experience" />
                <Post category="Suggestion" />
                <Post category="Suggestion" />
            </Col>
        )
    }
}

export default Happenings
