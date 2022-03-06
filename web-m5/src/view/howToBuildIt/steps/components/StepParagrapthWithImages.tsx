import { Col, Row, Image, Tag } from 'antd';
import Ribbon from 'antd/lib/badge/Ribbon';
import StepParagraph from './StepParagraph';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    images?: {
        url: string,
        reference?: string;
    }[];
}

export default function StepParagrapthWithImages(props: Props) {
    return (
        <Row
            gutter={[24, 24]}
        >
            <Col
                xs={24}
                md={14}
                lg={15}
            >
                <StepParagraph>{props.children}</StepParagraph>
            </Col>
            <Col
                xs={24}
                md={10}
                lg={9}
            >
                <Row
                    gutter={[6, 6]}
                >
                    {
                        props.images?.map((i) => (
                            <Col
                                xs={24}
                                md={12}
                                xxl={8}
                            >
                                {
                                    i.reference ? (
                                        <Ribbon text={`${i.reference}`} placement='start'>
                                            <Image src={i.url}/>
                                        </Ribbon>
                                    ) : (
                                        <Image src={i.url}/>
                                    )
                                }
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    );
}