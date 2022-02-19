import { Badge, Card, Divider, Image } from "antd"
import Price from "../shared/components/Price";
import MarketStudyElementSpecs from "./MarketStudyElementSpecs";

export type ItemSpecs = {
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
                <Divider/>
                <MarketStudyElementSpecs specs={item.specs}/>
            </Card>
        </Choosen>
    );
}