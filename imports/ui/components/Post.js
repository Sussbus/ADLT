import React from 'react'
import { Row, Col, Card } from 'antd'

import FavoriteButton from '../components/FavoriteButton'

const Post = ({ body, category, likes, postId }) => {
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
                    <Col span={2}>
                        <FavoriteButton likes={likes} postId={postId} />
                    </Col>
                    <Col span={22}>
                        <p style={{ marginBottom: 2 }}>{body}</p>
                    </Col>
                </Card>
            </Col>
        </Row>
    )
}

export default Post
