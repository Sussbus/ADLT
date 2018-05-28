import React from 'react'
import { Row, Col, Card } from 'antd'

const Post = ({ category }) => {
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
                    <p style={{ marginBottom: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio amet ab
                        temporibus asperiores quasi cupiditate. Voluptatum
                        ducimus voluptates voluptas?
                    </p>
                </Card>
            </Col>
        </Row>
    )
}

export default Post
