import { Col, Row, Image as AntImage, Tag } from 'antd';
import Ribbon from 'antd/lib/badge/Ribbon';
import Zoom from '../../../../animations/Zoom';
import StepParagraph from './StepParagraph';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    images?: {
        url: string,
        reference?: string;
    }[];
}

export default function StepParagrapthWithImages(props: Props) {
    const Image = (props: { src: string }) => {
        return (
            <AntImage height={200} width={200} src={props.src} />
        );
    }

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
                    gutter={[12, 12]}
                >
                    {
                        props.images?.map((i, index) => (
                            <Col
                                xs={24}
                                md={12}
                                xxl={8}
                            >
                                <Zoom delay={index * 0.25}>
                                    {
                                        i.reference ? (
                                            <Ribbon text={`${i.reference}`} placement='start'>
                                                <Image src={i.url} />
                                            </Ribbon>
                                        ) : (
                                            <Image src={i.url} />
                                        )
                                    }
                                </Zoom>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    );
}