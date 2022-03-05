import { Col, InputNumber, Row, Slider } from 'antd';

type Props = {
    setIva: (value: number) => void;
    iva: number;
}

export default function IvaSelector(props: Props) {

    const marks = {
        21: 'Normal'
    };

    return (
        <Row gutter={[12,12]}>
            <Col span={12}>
                <Slider
                    min={0}
                    max={100}
                    onChange={props.setIva}
                    value={props.iva ?? 21}
                    marks={marks}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={0}
                    max={100}
                    style={{ margin: '0 16px' }}
                    value={props.iva}
                    onChange={props.setIva}
                />
            </Col>
        </Row>
    )
}