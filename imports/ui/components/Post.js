import React from 'react'
import { Row, Col, Card } from 'antd'

const Post = ({ category, body }) => {
    return (
        <Row style={{ marginBottom: 10 }}>
            <Col span={12}>
                <Card title={null}>
                    <Row style={{ marginTop: -10 }}>
                        <p
                            style={{
                                float: 'right',
                                marginRight: 8,
                                fontWeight: '700',
                                marginBottom: 8
                            }}
                        >
                            {category}
                        </p>
                    </Row>
                    <p style={{ marginBottom: 2 }}>{body}</p>
                </Card>
            </Col>
        </Row>
    )
}

export default Post
