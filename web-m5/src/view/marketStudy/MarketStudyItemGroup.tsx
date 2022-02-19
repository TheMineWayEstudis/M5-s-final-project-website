import { Col, Row } from 'antd';
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
                <h2
                    style={{textAlign: 'center'}}
                >
                    {props.asideIcon}
                    {props.title}
                    {props.asideIcon}
                </h2>
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
