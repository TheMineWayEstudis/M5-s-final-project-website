import { Badge, Card, Divider, Image, Tag } from "antd";
import Price from "../shared/components/Price";
import MarketStudyElementSpecs from "./MarketStudyElementSpecs";

export enum Positions {
    top = 'Top',
    bottom = 'Bottom',
    left = 'Left',
    right = 'Right',
}

export type ItemSpecs = {
    // CPU
    ghz?: number;
    mhz?: number;
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
    memoryType?: 'DDR4-SDRAM' | 'GDDR6X';
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
    usb3_0?: number;
    usb3_1_c?: number;
    firewire?: number;
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
    diskRPM?: number;
    diskTransfer?: number;

    // POWER SUPPLY
    powSupply?: number;
    isModular?: boolean;
    caEntry?: [number, number];
    powerEfficiency?: number;

    // GRAPHICS
    pciEType?: 'PCIe 4.0';
    cudaCores?: number;
    vrReady?: boolean;
    displayPort?: number;
    hdmiPort?: number;
    dviPort?: number;

    // BOX
    factor?: 'ATX';
    powerSupplyPosition?: Positions;

    // SCREEN
    hz?: number;
    resolution?: '4K' |'1080p';
    inches?: number;
    gSync?: boolean;
    screenType?: 'IPS';
    includesSpeakers?: boolean;

    // CACTUS
    cactusUnits?: number;

    // KEYBOARD
    keyboardArrangement?: 'QWERTY';
    hasNumpad?: boolean;
    volumeController?: boolean;
    language?: 'Spanish';
    ownDrivers?: boolean;
    keyboardType?: 'Mechanical';

    // MOUSE
    dpi?: number;
    lateralButtons?: boolean;
    dpiAdjuster?: boolean;

    // OTHER
    fans?: number;
    hasRGB?: boolean;
    watercooling?: boolean;
    airCooling?: boolean;
    width?: number;
    height?: number;
    depth?: number;
    powerConsumption?: number;
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