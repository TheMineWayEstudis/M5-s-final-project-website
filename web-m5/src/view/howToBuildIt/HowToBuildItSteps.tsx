import { Steps } from 'antd';
import React from 'react';

const { Step } = Steps;

export type StepItem = {
    name: string;
    description: string;
    component: JSX.Element;
}

type Props = {
    step: number;
    steps: StepItem[];
    setStep: (step: number) => void;
}

export default function HowToBuildItSteps(props: Props) {
    return (
        <Steps current={props.step} onChange={props.setStep}>
            {
                props.steps.map((step) => (
                    <Step title={step.name} description={<p>{step.description}</p>}/>
                ))
            }
        </Steps>
    );
}