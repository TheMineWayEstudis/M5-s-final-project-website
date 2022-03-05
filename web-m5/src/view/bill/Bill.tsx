import { Divider } from "antd";
import SectionDescription from "../shared/components/SectionDescription";
import SectionTitle from "../shared/components/SectionTitle";

export default function Bill() {
    return (
        <>
            <SectionTitle>Computer bill</SectionTitle>
            <SectionDescription>
                In this page you can find the detailed bill of the computer (including the required tools)
            </SectionDescription>
            
            <Divider/>
        </>
    );
}