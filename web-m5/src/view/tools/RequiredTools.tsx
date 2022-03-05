import { Card, Col, Divider, Image, Row, Tag } from "antd";
import Price from "../shared/components/Price";
import SectionDescription from "../shared/components/SectionDescription";
import SectionTitle from "../shared/components/SectionTitle";
import tools from "./Tools";

export default function RequiredTools() {
    return (
        <>
            <SectionTitle>Required tools</SectionTitle>
            <SectionDescription>
                In order to build and maintain the computer we will need some tools (required and recommended)
            </SectionDescription>

            <Divider/>

            <Row
                gutter={[24,24]}
                justify='center'
            >
                {
                    tools.map((tool) => (
                        <Col
                            xs={24}
                            md={12}
                            xl={6}
                            xxl={4}
                        >
                            <Card
                                hoverable
                                cover={<Image src={tool.imageUrl}/>}
                                title={tool.name }
                                extra={<Tag color={tool.category === 'Recommended' ? 'cyan' : 'green'}>{tool.category}</Tag>}
                                actions={[<a href={tool.purchaseUrl} target="_blank">Purchase</a>]}
                            >
                                <Price calculateIVA>{tool.price}</Price>
                                <Divider/>
                                <p
                                    style={{textAlign: 'justify'}}
                                >
                                    {tool.reason}
                                </p>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}