import React, { Component } from 'react'
import { Card, Input, Row, Col } from 'antd'

class Happenings extends Component {
    render() {
        return (
            <Col span={20} offset={2}>
                <Row style={{marginBottom: 15}}>
                    <Col span={10} style={{paddingTop: 20}}>
                        <Input.TextArea placeholder="Got anything you want to share with the community?" autosize={{ minRows: 3, maxRows: 6 }} />
                    </Col>
                </Row>
                <Row style={{marginBottom: 10}}>
                    <Col span={12}>
                        <Card title={null}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginBottom: 10}}>
                    <Col span={12}>
                        <Card title={null}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginBottom: 10}}>
                    <Col span={12}>
                        <Card title={null}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                        </Card>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default Happenings
