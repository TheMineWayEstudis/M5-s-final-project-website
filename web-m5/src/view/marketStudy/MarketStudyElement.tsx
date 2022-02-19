import { Badge, Card, Image } from "antd"

export type MarketStudyItem = {
    imageUrl: string;
    name: string;
    purchaseUrl: string;

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
            >

            </Card>
        </Choosen>
    );
}