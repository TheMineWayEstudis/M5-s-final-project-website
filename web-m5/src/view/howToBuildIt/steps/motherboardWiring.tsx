import { Col, Row } from "antd";
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
                <IP
                    images={[
                        {
                            url: require('./resources/motherboardWiring/WIRING_2.PNG'),
                            reference: "Box fans",
                        },
                        {
                            url: require('./resources/motherboardWiring/WIRING_1.PNG'),
                            reference: "24 PIN ATX",
                        },
                        {
                            url: require('./resources/motherboardWiring/WIRING_3.PNG'),
                            reference: "Frontal pannel",
                        },
                    ]}
                >
                    <p>
                        We try to connect as much wires as we can to the mothermoard. We need to connect the front pannel wires, the CPU watercooling RGB and the box fans.
                    </p>
                    <Row>
                        <p>
                            In order to connect the front pannel wires, we might want to use the following image as a reference of the connector:
                        </p>
                        <Col span={12}>
                            <table className="FrontPannelTable">
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td></td>
                                </tr>
                            </table>
                        </Col>
                        <Col span={12}>
                            <ul>
                                <li><b>1 and 3:</b> HDD Led</li>
                                <li><b>2 and 4:</b> Power Led</li>
                                <li><b>5 and 7:</b> Reset</li>
                                <li><b>6 and 8:</b>Power</li>
                                <li><b>0:</b> Reserved PIN</li>
                            </ul>
                        </Col>
                    </Row>
                    <p>
                        Then we connect the 24 pin power wire and 2 x8 pins CPU power wires.
                    </p>
                </IP>
                <P>
                    Once we have connected to the motherboard all those wires we can use bridles in order to organize things a little bit.
                </P>
            </>
        </>
    ),
}

export default motherboardWiring;