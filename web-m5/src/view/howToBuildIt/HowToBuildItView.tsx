import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space } from 'antd';
import { useState } from 'react';
import HowToBuildItSteps, { StepItem } from './HowToBuildItSteps';
import motherboard from './steps/motherboard';
import powerSupply from './steps/powerSupply';
import setup from './steps/setup';

const steps: StepItem[] = [
    setup,
    powerSupply,
    motherboard,
];

export default function HowToBuildItView() {
    const [step, setStep] = useState<number>(0);

    return (
        <>
            <Row
                gutter={[24, 24]}
            >
                <Col span={24}>
                    <HowToBuildItSteps
                        step={step}
                        steps={steps}
                        setStep={setStep}
                    />
                </Col>
                <Col span={24}>
                    <Card>
                        <Space>
                            <Button icon={<LeftOutlined/>} disabled={step <= 0} onClick={() => setStep(step - 1)}>Back</Button>
                            <Button icon={<RightOutlined/>} disabled={step >= steps.length - 1} onClick={() => setStep(step + 1)}>Next</Button>
                        </Space>
                    </Card>
                </Col>
                <Col span={24}>
                    {steps[step].component}
                </Col>
            </Row>
        </>
    );
}