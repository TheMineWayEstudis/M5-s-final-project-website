import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export default function ProgramsTable() {
    type RequirementProps = {
        name: string,
        value: number,
    };
    type Requirements = {
        graphics: RequirementProps,
        memory: RequirementProps,
        massiveStorage: RequirementProps,
        fastStorage: RequirementProps,
        fastCPU: RequirementProps,
        CPUCores: RequirementProps,
        refrigeration: RequirementProps,
    };

    const columns: ColumnsType<Requirements> = [];
    const data: Requirements[] = [];

    return (
        <Table
            columns={columns}
            dataSource={data}
        >

        </Table>
    );
}