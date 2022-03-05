import { Avatar, Card, Col, Row, Space, Table, TableProps } from "antd";
import { ColumnsType } from "antd/lib/table";
import Price, { calculateIva, processPrice } from "../../shared/components/Price";

const { Column } = Table;

export type InvoiceItem = {
    name: string;
    purchaseUrl: string;
    imageUrl: string;
    price: number;
    units: number;
};

type Props = {
    iva: number;
    items: InvoiceItem[];
}

export default function InvoiceTable(props: Props) {

    const columns: ColumnsType<InvoiceItem> = [
        {
            title: "Avatar",
            dataIndex: "imageUrl",
            render: (value: string, row) => <a href={row.purchaseUrl} target="_blank"><Avatar src={value} size={48} /></a>,
            width: 100,
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Price (without IVA)",
            dataIndex: 'price',
            render: (value: number, row) => row.units > 1 ? (
                <>{processPrice(value)}€ x {row.units} = {processPrice(value * row.units)}€</>
            ) : (
                <>{processPrice(value)}€</>
            ),
            sorter: (a, b) => (b.price * b.units) - (a.price * a.units),
        },
        {
            title: "Price",
            render: (value, row) => row.units > 1 ? (
                <>{processPrice(calculateIva(row.price, props.iva))}€ x {row.units} = {processPrice(calculateIva(row.price * row.units, props.iva))}€</>
            ) : (
                <>{processPrice(calculateIva(row.price, props.iva))}€</>
            ),
            sorter: (a, b) => calculateIva(b.price * b.units, props.iva) - calculateIva(a.price * a.units, props.iva),
        },
    ];

    return (
        <Row
            gutter={[24,24]}
        >
            <Col span={24}>
                <Table
                    pagination={false}
                    dataSource={props.items}
                    columns={columns}
                />
            </Col>
            <Col span={24}>
                <Card>
                    
                </Card>
            </Col>
        </Row>
    )
}