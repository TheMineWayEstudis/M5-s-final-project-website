import { useState } from 'react';
import { getComponents } from '../marketStudy/MarketStudy';
import tools from '../tools/Tools';
import InvoiceTable, { InvoiceItem } from './components/InvoiceTable';

export default function ViewInvoice() {
    const [ iva, setIva ] = useState<number>(21);

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
        <>
            <InvoiceTable
                iva={iva}
                items={items}
            />
        </>
    );
}