import { Card, Col, Row, Image } from 'antd';
import StepParagraph from './StepParagraph';

export default function StepItemCard(props: { imageUrl: string, name: string }) {
    return (
        <Col
            xs={24}
            sm={12}
            lg={8}
            xl={6}
            xxl={4}
        >
            <Card
                hoverable
                cover={<Image src={props.imageUrl} />}
                title={props.name}
            />
        </Col>
    );
}