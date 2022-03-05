import { Divider } from "antd";
import SectionDescription from "../shared/components/SectionDescription";
import SectionTitle from "../shared/components/SectionTitle";
import ViewInvoice from "./ViewInvoice";

export default function Bill() {
    return (
        <>
            <SectionTitle>Computer bill</SectionTitle>
            <SectionDescription>
                In this page you can find the detailed bill of the computer (including the required tools)
            </SectionDescription>
            
            <Divider/>

            <ViewInvoice/>
        </>
    );
}