import { Alert, Checkbox, List } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const CheckItem = (props: { children: string }) => {
    return <List.Item><Checkbox>{props.children}</Checkbox></List.Item>;
}

const checks: StepItem = {
    name: "Final checks",
    description: "We check that everything is proporly installed.",
    component: (
        <>
            <>
                <SCTitle>Checking component</SCTitle>
                <P>
                    <p>
                        Now we have reached the end of the setup. Before powering up the computer we must check that everything is connected proporly. You might want to use the next checklist:
                    </p>
                    <List>
                        <CheckItem>CPU refrigeration (if it is correct, the CPU must be too).</CheckItem>
                        <CheckItem>RAM slots (check if they are inserted at all).</CheckItem>
                        <CheckItem>Fans (check they are connected to the motherboard/power supply).</CheckItem>
                        <CheckItem>Disks (check they are screwdrived and connected to the motherboard and the power supply).</CheckItem>
                        <CheckItem>Power supply (check it is placed proporly and all power wires are connected proporly).</CheckItem>
                        <CheckItem>Graphics card (check it is connected proporly).</CheckItem>
                        <CheckItem>M.2. (check it is connected and attached proporly).</CheckItem>
                        <CheckItem>Motherboard battery (check there is a battery on the motherboard).</CheckItem>
                        <CheckItem>FireWire (check it is connected proporly).</CheckItem>
                        <CheckItem>Cactus (check it is next to the computer. If it needs to you can water it).</CheckItem>
                    </List>
                    <p>
                        Once we have checked all the setup, we can continue.
                    </p>
                </P>
            </>
        </>
    ),
};

export default checks;