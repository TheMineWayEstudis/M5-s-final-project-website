import { Alert } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const startup: StepItem = {
    name: "Computer startup",
    description: "We install the final components.",
    component: (
        <>
            <>
                <SCTitle>Connecting peripherals</SCTitle>
                <P>
                    <p>
                        Now that we have ended the setup, we need to connect all the basic I/O periptehals. We unbox peripherals as we need them.
                    </p>
                    <p>
                        We connect the keyboard and mouse to some of the back USB-A connectors. Now we connect one screen to the graphics card (using the HDMI interface).
                        Now that we have the basic I/O of the computer we can turn on the computer. We connect it to the power network of our home. Then we press the power button and see how it powers up (or a very expensive explosion).
                    </p>
                </P>
            </>
            <>
                <SCTitle>BIOS</SCTitle>
                <p>
                    If there are any troubles (components are not being detected, some interfaces are not being recognised, etc) you can update the BIOS using the latest firmware provided by the motherboard manufacturer (<a href="https://rog.asus.com/es/motherboards/rog-crosshair/rog-crosshair-viii-extreme-model/" target='_blank'>manufacturer page</a>).
                </p>
                <p>
                    Once everything works nice and smooth we can do some adjustments like:
                    <ul>
                        <li>Enabling the hardware virtualization.</li>
                        <li>Overclocking the CPU and memory.</li>
                    </ul>
                    <Alert showIcon type="warning" message="Overclocking components might shorten their lifespan, so be careful."/>
                </p>
                <p>
                    Once everything is working, we connect the rest of the peripherals.
                </p>
            </>
            <>
                <SCTitle>OS Setup</SCTitle>
                <p>
                    I do not consider it as part of the computer build, but when the computer is ready you need to install the operative system. You need to use a USB setup because this computer does not support the classic CD/DVD instalaltion.
                </p>
            </>
            <p>
                Now that everything works, you can close the computer box (screwdriving it if necessary).
            </p>
        </>
    ),
};

export default startup;