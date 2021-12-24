import { Card, Col, Row } from 'antd';
import React from 'react'

export default function MainScreenBodyItems() {
    return (
        <div className="site-card-wrapper">
            <Row gutter={[24, 24]}>
                <Col lg={8} style={{display: 'flex'}}>
                    <Card>
                        <h2 style={{ fontWeight: 'bold' }}>About the site</h2>
                        <p style={{ textAlign: 'justify' }}>
                            In order to create this website I decided to use React, a JavaScript library used to create modern and well performant websites easily. To ease the development the source code is written in TypeScript instead of JavaScript.
                            <br />
                            I used Antd as the visual Framework for this project. It provides cool components that give good-looking styles to the site. It also provides responsive support so the site is well displayed on all devices, no matter the size of the screen.
                        </p>
                    </Card>
                </Col>
                <Col lg={8} style={{display: 'flex'}}>
                    <Card>
                        <h2 style={{ fontWeight: 'bold' }}>Project source code</h2>
                        <p style={{ textAlign: 'justify' }}>
                            As every good developer I have the source code of this project on a public GitHub repository so everybody is able to see how the website works underthehood.
                            <br />
                            In the GitHub project you'll see all the commits made during the project development so all changes are tracked for analysis.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}