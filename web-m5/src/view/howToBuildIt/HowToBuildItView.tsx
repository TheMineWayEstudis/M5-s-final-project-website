import { FlagOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space } from 'antd';
import { useState } from 'react';
import HowToBuildItSteps, { StepItem } from './HowToBuildItSteps';
import motherboard from './steps/motherboard';
import boxBasics from './steps/boxBasics';
import setup from './steps/setup';
import motherboardWiring from './steps/motherboardWiring';
import './steps/motherboardWiring.css';
import disks from './steps/disks';
import graphics from './steps/graphics';
import checks from './steps/checks';
import additional from './steps/addtional';
import startup from './steps/startup';
import HowToBuildItEnd from './HowToBuildItEnd';
import Confetti from 'react-confetti';

const steps: StepItem[] = [
    setup,
    boxBasics,
    motherboard,
    motherboardWiring,
    disks,
    graphics,
    additional,
    checks,
    startup,
];

export default function HowToBuildItView() {
    const [step, setStep] = useState<number>(0);

    return (
        <>
            {step >= steps.length && <Confetti/>}
            <Row
                gutter={[24, 24]}
                justify='center'
            >
                <Col span={24}>
                    <HowToBuildItSteps
                        step={step}
                        steps={steps}
                        setStep={setStep}
                    />
                </Col>
                <Col
                    xs={24}
                    md={21}
                >
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Card>
                                <Space>
                                    <Button icon={<LeftOutlined />} disabled={step <= 0} onClick={() => setStep(step - 1)}>Back</Button>
                                    <Button icon={step >= steps.length - 1 ? <FlagOutlined /> : <RightOutlined />} disabled={step >= steps.length} onClick={() => setStep(step + 1)}>{step >= steps.length - 1 ? "End installation" : "Next"}</Button>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={24}>
                            {
                                step >= steps.length ? (
                                    <HowToBuildItEnd />
                                ) : (<>{steps[step].component}</>)
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}