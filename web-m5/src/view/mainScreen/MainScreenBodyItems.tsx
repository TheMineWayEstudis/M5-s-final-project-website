import { Card, Col, Row } from 'antd';
import React from 'react'

export default function MainScreenBodyItems() {
    return (
        <Row gutter={[24,24]}>
            <Col md={8}>
                <Card>
                    <h2 style={{fontWeight: 'bold'}}>About the site</h2>
                    <p style={{textAlign: 'justify'}}>
                        In order to create this website I decided to use React, a JavaScript library used to create modern and well performant websites easily. To ease the development the source code is written in TypeScript instead of JavaScript.
                        <br/>
                        I used Antd as the visual Framework for this project. It provides cool components that give good-looking styles to the site. It also provides responsive support so the site is well displayed on all devices, no matter the size of the screen.
                    </p>
                </Card>
            </Col>
            <Col>
                <Card>

                </Card>
            </Col>
        </Row>
    );
}