import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const motherboardWiring: StepItem = {
    name: "Motherboard wiring",
    description: "We connect as much wires as we are able to.",
    component: (
        <>
            <>
                <SCTitle>Motherboard wiring</SCTitle>
                <IP>
                    <p>
                        We try to connect as much wires as we can to the mothermoard.
                    </p>
                </IP>
            </>
        </>
    ),
}

export default motherboardWiring;