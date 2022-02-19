import { Col, Divider, Row } from 'antd';
import MarketStudyElement, { MarketStudyItem } from './MarketStudyElement';

type Props = {
    items: MarketStudyItem[];
    title: string;
    asideIcon?: JSX.Element;
}

export default function MarketStudyItemGroup(props: Props) {
    return (
        <Row
            gutter={[24,24]}
            justify="center"
        >
            <Col
                span={24}
            >
                <Divider
                    orientation='center'
                >
                    <h3>
                        {props.asideIcon}
                        {props.title}
                        {props.asideIcon}
                    </h3>
                </Divider>
            </Col>
            {
                props.items.map((i) => (
                    <Col
                        xs={24}
                        md={8}
                        lg={6}
                        xxl={4}
                    >
                        <MarketStudyElement item={i}/>
                    </Col>
                ))
            }
        </Row>
    );
}
