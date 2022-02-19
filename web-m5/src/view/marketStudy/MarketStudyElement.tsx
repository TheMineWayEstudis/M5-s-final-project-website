import { Badge, Card, Image } from "antd"
import Price from "../shared/components/Price";

type ItemSpecs = {
    
}

export type MarketStudyItem = {
    imageUrl: string;
    name: string;
    purchaseUrl: string;
    price: number;
    specs: ItemSpecs;

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
            </Card>
        </Choosen>
    );
}