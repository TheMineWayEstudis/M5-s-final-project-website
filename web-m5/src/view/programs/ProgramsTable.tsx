import { CheckCircleOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export default function ProgramsTable() {
    const iconsSize: number = 50;

    type ProgramProps = boolean;
    type Program = {
        icon: string,
        name: string,
        purpose: 'gaming' | 'developing' | 'studying' | 'other',
        graphics?: ProgramProps,
        memory?: ProgramProps,
        massiveStorage?: ProgramProps,
        fastStorage?: ProgramProps,
        fastCPU?: ProgramProps,
        CPUCores?: ProgramProps,
        refrigeration?: ProgramProps,
    };

    type ProgramHeader = {
        name: string,
        value: string,
    };

    const headers: ProgramHeader[] = [
        {
            name: 'Graphics',
            value: 'graphics',
        },
        {
            name: 'Memory',
            value: 'memory',
        },
        {
            name: 'Massive storage',
            value: 'massiveStorage',
        },
        {
            name: 'Fast storage',
            value: 'fastStorage',
        },
        {
            name: 'Fast CPU',
            value: 'fastCPU',
        },
        {
            name: 'Multiple CPU cores',
            value: 'CPUCores'
        },
        {
            name: 'Good refrigeration',
            value: 'refrigeration',
        },
    ];

    const columns: ColumnsType<Program> = [
        {
            title: 'Computer requirements by software',
            children: [
                {
                    title: 'Program',
                    render: (row: Program) => <div style={{ textAlign: 'center' }}><img width={iconsSize} src={row.icon} /></div>,
                    filters: [
                        {
                            text: 'Gaming',
                            value: 'gaming',
                        },
                        {
                            text: 'Developing',
                            value: 'developing',
                        },
                        {
                            text: 'Studying',
                            value: 'studying',
                        },
                        {
                            text: 'Other',
                            value: 'other',
                        },
                    ],
                    onFilter: (value: string | number | boolean, record: Program) => record.purpose === value,
                    sorter: (a: Program, b: Program) => a.name.localeCompare(b.name),
                    defaultSortOrder: 'ascend',
                },
                ...headers.map((header: ProgramHeader) => (
                    {
                        title: header.name,
                        dataIndex: header.value,
                        render: (value: boolean) => <div style={{ textAlign: 'center' }}>{value ? <CheckOutlined style={{ color: 'green' }} size={iconsSize} /> : <CloseOutlined style={{ color: 'red' }} size={iconsSize} />}</div>,
                        onFilter: (value: string | number | boolean, record: Program) => (record as any)[header.value] || false === value,
                        filters: [
                            {
                                text: 'Required',
                                value: true,
                            },
                            {
                                text: 'Not required',
                                value: false,
                            },
                        ],
                        sorter: (a: any, b: any) => (a[header.value] ? 1 : -1) - (b[header.value] ? 1 : -1),
                    }
                )),
            ]
        }
    ];

    const data: Program[] = [
        {
            icon: require('./resources/vscode.png'),
            name: 'VSCode',
            purpose: 'developing',
        },
        {
            icon: require('./resources/android_studio.png'),
            name: 'Android Studio',
            purpose: 'developing',
            memory: true,
            massiveStorage: true,
            CPUCores: true,
        },
        {
            icon: require('./resources/unity.png'),
            name: 'Unity',
            purpose: 'developing',
            memory: true,
            graphics: true,
            fastCPU: true,
        }
    ];

    return (
        <Table
            scroll={{ x: 1000 }}
            style={{ width: '100%' }}
            columns={columns}
            dataSource={data}
        >

        </Table>
    );
}