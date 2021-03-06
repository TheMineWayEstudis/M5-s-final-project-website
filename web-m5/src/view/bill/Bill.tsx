import { Divider } from "antd";
import SectionDescription from "../shared/components/SectionDescription";
import SectionTitle from "../shared/components/SectionTitle";
import ViewInvoice from "./ViewInvoice";

export default function Bill() {
    return (
        <>
            <SectionTitle>Computer budget</SectionTitle>
            <SectionDescription>
                In this page you can find the detailed budget of the computer (including the required tools)
            </SectionDescription>
            
            <Divider/>

            <ViewInvoice/>
        </>
    );
}