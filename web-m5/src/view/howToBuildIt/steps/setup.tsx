import { Col, Row, Divider } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import StepItemCard from "./components/StepItemCard";
import P from "./components/StepParagraph";
import SCTitle from "./components/StepCheckableTitle";

const setup: StepItem = {
    name: "Setup",
    description: "Take the tools, components, etc.",
    component: (
        <Row
            gutter={[24,24]}
        >
            <Col span={24}>
                <SCTitle>Initial preparation</SCTitle>
                <P>At first, we need to take all the material together (components, tools, etc) and bring them to a comfortable and ergonomic space where we can work. Once we have everything organized, we are able to start working on the build.</P>
            </Col>
            <Col span={24}>
                <Divider orientation="left">Tools</Divider>
                <Row gutter={[24,24]}>
                    <StepItemCard
                        imageUrl="https://m.media-amazon.com/images/I/71g0R2pDGeL._AC_SL1460_.jpg"
                        name="Screwdrivers"
                        delay={0.25}
                    />
                    <StepItemCard
                        imageUrl="https://m.media-amazon.com/images/I/51pjklTW-6L._AC_SL1002_.jpg"
                        name="Antistatic wristband"
                        delay={0.5}
                    />
                </Row>
            </Col>
        </Row>
    ),
}

export default setup;