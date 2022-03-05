import { Card, Col, Row } from 'antd';
import { useState } from 'react';
import { getComponents } from '../marketStudy/MarketStudy';
import IvaSelector from '../shared/components/IvaSelector';
import tools from '../tools/Tools';
import InvoiceTable, { InvoiceItem } from './components/InvoiceTable';

export default function ViewInvoice() {
    const [iva, setIva] = useState<number>(21);

    const items: InvoiceItem[] = [
        ...getComponents().map((c) => {
            const component = c.components.find((co) => co.choosen)!;

            return {
                ...component,
                units: c.units ?? 1,
            };
        }),
        ...tools.map((tool) => ({
            ...tool,
            units: 1,
        })),
    ];

    return (
        <Row gutter={[24, 24]}>
            <Col span={24}>
                <Row gutter={[24,24]}>
                    <Col
                        xs={24}
                        md={12}
                        lg={6}
                    >
                        <IvaSelector
                            iva={iva}
                            setIva={setIva}
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <InvoiceTable
                    iva={iva}
                    items={items}
                />
            </Col>
        </Row>
    );
}