import { Badge, Card, Divider, Image, Tag } from "antd";
import Price from "../shared/components/Price";
import MarketStudyElementSpecs from "./MarketStudyElementSpecs";

export type ItemSpecs = {
    // CPU

    ghz?: number;
    turboGhz?: number;
    cores?: number;
    threads?: number;
    socket?: 'AM4';
    model?: string;
    bits?: 32 | 64;
    pow?: number;
    integratedGPU?: boolean;
    cache?: number;
    unlocked?: boolean;

    // MEMORY
    memoryType?: 'DDR4-SDRAM';
    memorySpeed?: number;
    memoryAmount?: number;
    memoryLatency?: number;
    memorySticks?: number;

    // MOTHERBOARD
    maxRAM?: number;
    hasBluetooth?: boolean;
    hasWiFi?: boolean;
    chipset?: string;
    motherboardFactor?: 'ATX' | 'Extended ATX';
    biosType?: 'UEFI AMI';
    dualChannel?: boolean;
    memorySlots?: number;
    usb2_0?: number;
    usb3_2_gen1?: number;
    usb3_2_gen2?: number;
    sata?: number;
    hasEthernet?: boolean;
    pciEx1?: number;
    pciEx16?: number;
    m2?: number;
    audio?: '7.1';

    // DISK
    diskWrite?: number;
    diskRead?: number;
    diskSpace?: number;
    smart?: boolean;
    hardwareEncryption?: boolean;

    // OTHER
    hasRGB?: boolean;
    watercooling?: boolean;
}

export type MarketStudyItem = {
    imageUrl: string;
    name: string;
    purchaseUrl: string;
    price: number;
    specs: ItemSpecs;
    manufacturer: string;

    choosen?: boolean;
}

type Props = {
    item: MarketStudyItem;
}

export default function MarketStudyElement(props: Props) {
    const item = props.item;

    const Choosen = (props: { children: JSX.Element }) => {
        if (item.choosen) {
            return (
                <Badge.Ribbon
                    text="Choosen"
                    color="green"
                >
                    {props.children}
                </Badge.Ribbon>
            )
        }

        return props.children;
    }

    return (
        <Choosen>
            <Card
                hoverable
                cover={<Image style={{ width: '100%' }} src={item.imageUrl} />}
                title={item.name}
                actions={[<a href={item.purchaseUrl} target="_blank">Purchase</a>]}
            >
                <Price calculateIVA={true}>{item.price}</Price>
                <Tag color="pink">{item.manufacturer}</Tag>
                <Divider/>
                <MarketStudyElementSpecs specs={item.specs}/>
            </Card>
        </Choosen>
    );
}