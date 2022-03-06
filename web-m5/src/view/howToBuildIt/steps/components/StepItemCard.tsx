import { Card, Col, Row, Image } from 'antd';
import Zoom from '../../../../animations/Zoom';

export default function StepItemCard(props: { imageUrl: string, name: string, delay: number }) {
    return (
        <Col
            xs={24}
            sm={12}
            lg={8}
            xl={6}
            xxl={4}
        >
            <Zoom delay={props.delay}>
                <Card
                    hoverable
                    cover={<Image src={props.imageUrl} />}
                    title={props.name}
                />
            </Zoom>
        </Col>
    );
}