import { Avatar, Button, Card, Col, Row, Space, Table, TableProps } from "antd";
import { ColumnsType } from "antd/lib/table";
import { saveAs } from "file-saver";
import { calculateIva, processPrice } from "../../shared/components/Price";

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

    function sum(nums: number[]): number {
        let num = 0;
        for(const n of nums) num += n;
        return num;
    }

    function generateCsv() {
        const rows: string[][] = [
            [
                "Name", "Price (without IVA)", "Price",
            ],
            ...props.items.map((i) => [
                i.name,
                `${processPrice(Math.floor(i.price * 100) / 100)}€`,
                `${processPrice(calculateIva(i.price, props.iva))}€`,
            ]),
            [],
            [
                "Total", `${Math.round(sum(props.items.map((i) => i.price)) * 100) / 100}€`, `${Math.round(sum(props.items.map((i) => calculateIva(i.price, props.iva))) * 100) / 100}€`,
            ],
        ];

        return rows.map((r) => r.join(';')).join('\n');
    }

    return (
        <Row
            gutter={[24,24]}
        >
            <Col span={24}>
                <Table
                    sticky
                    pagination={false}
                    dataSource={props.items}
                    columns={columns}
                    summary={(pageData) => {
                        const price = sum(pageData.map((p) => p.price));

                        return (
                            <>
                                <Table.Summary.Row>
                                    <Table.Summary.Cell index={0} colSpan={2}></Table.Summary.Cell>
                                    <Table.Summary.Cell index={1}>Total: <b>{processPrice(Math.floor(price * 100) / 100)}€</b></Table.Summary.Cell>
                                    <Table.Summary.Cell index={2}>Total: <b>{processPrice(Math.round(calculateIva(price, props.iva) * 100) / 100)}€</b></Table.Summary.Cell>
                                </Table.Summary.Row>
                            </>
                        );
                    }}
                />
            </Col>
            <Col span={24}>
                <Button onClick={() => saveAs(new Blob([generateCsv()]), 'campos-joel-computer-budget.csv')}>Download as CSV</Button>
            </Col>
        </Row>
    );
}