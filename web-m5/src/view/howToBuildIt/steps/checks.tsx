import { Alert } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const checks: StepItem = {
    name: "Final checks",
    description: "We check that everything is proporly installed.",
    component: (
        <>
            <>
                <SCTitle>Checking component</SCTitle>
                <P>
                    <p>
                        
                    </p>
                </P>
            </>
        </>
    ),
};

export default checks;