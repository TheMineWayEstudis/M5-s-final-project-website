import { CheckCircleOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export default function ProgramsTable() {
    const iconsSize: number = 50;

    type ProgramProps = boolean;
    type Program = {
        icon: string,
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
    }

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
            title: 'Program',
            render: (row: Program) => <div style={{textAlign: 'center'}}><img width={iconsSize} src={row.icon}/></div>,
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
        },
        ...headers.map((header: ProgramHeader) => (
            {
                title: header.name,
                dataIndex: header.value,
                render: (value: boolean) => <div style={{textAlign: 'center'}}>{value ? <CheckOutlined style={{color: 'green'}} width={iconsSize}/> : <CloseOutlined style={{color: 'red'}} width={iconsSize}/>}</div>,
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
            }
        )),
    ];
    const data: Program[] = [
        {
            icon: 'https://jonmircha.com/img/blog/vscode.png',
            purpose: 'developing',
        },
        {
            icon: 'https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png',
            purpose: 'developing',
            memory: true,
            massiveStorage: true,
            CPUCores: true,
        }
    ];

    return (
        <Table
            style={{width: '100%'}}
            columns={columns}
            dataSource={data}
        >

        </Table>
    );
}