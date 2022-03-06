import { Col, Row, Image, Divider } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import StepItemCard from "./components/StepItemCard";
import StepParagraph from "./components/StepParagraph";

const setup: StepItem = {
    name: "Setup",
    description: "Take the tools, components, etc",
    component: (
        <Row
            gutter={[24,24]}
        >
            <Col span={24}>
                <StepParagraph>At first, we need to take all the material together (components, tools, etc) and bring them to a comfortable and ergonomic space where we can work. Once we have everything organized, we are able to start working on the build.</StepParagraph>
            </Col>
            <Col span={24}>
                <Divider orientation="left">Tools</Divider>
                <Row gutter={[24,24]}>
                    <StepItemCard
                        imageUrl="https://m.media-amazon.com/images/I/71g0R2pDGeL._AC_SL1460_.jpg"
                        name="Screwdrivers"
                    />
                    <StepItemCard
                        imageUrl="https://m.media-amazon.com/images/I/51pjklTW-6L._AC_SL1002_.jpg"
                        name="Antistatic wristband"
                    />
                </Row>
            </Col>
        </Row>
    ),
}

export default setup;