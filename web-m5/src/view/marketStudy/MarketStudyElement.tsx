import { Card, Image } from "antd"

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

    return (
        <Card
            hoverable
            cover={<Image style={{width: '100%'}} src={item.imageUrl}/>}
            title={item.name}
        >
            
        </Card>
    );
}