import { HeartOutlined } from '@ant-design/icons';
import { Card, Col, Row, Image, Tooltip } from 'antd';
import ProgramsTable from '../programs/ProgramsTable';
import SectionTitle from '../shared/components/SectionTitle';

export default function ComputerUsage() {
    return (
        <>
            <SectionTitle>About the computer usage</SectionTitle>
            <br />
            <Row gutter={[24, 24]}>
                <Col lg={10} sm={24}>
                    <Row gutter={[24,24]}>
                        <Col span={24}>
                            <Card
                                style={{ width: '100%' }}
                            >
                                <h2
                                    style={{ fontWeight: 'bold' }}
                                >
                                    What is the aim of the computer?
                                </h2>

                                <p style={{ textAlign: 'justify' }}>
                                    Before I start designing the computer I have to think about what am I going to use the computer for. As a result it shows up I'm currently using my computer to play videogames, study (IT) and develop solutions for my personal projects. In order to have a visual display of the main usage of the computer I created a table that contains some of my most used programs and games. Every row represents a program (identified by its icon) containing a tick on those rows that represent a computer resource that is almost crucial for its proper execution.
                                    <br/>
                                    Using the table we can see the global needs that the computer must cover, so we can start picking components (or at least getting an idea).
                                </p>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card
                                style={{ width: '100%' }}
                            >
                                <h2
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Should the computer have fancy {<Tooltip title={<>We {<HeartOutlined/>} LGTBI+</>} color='pink'>RGB</Tooltip>} lights?
                                </h2>

                                <p style={{ textAlign: 'justify' }}>
                                    Yes, as every good gaming setup RGB must be present. We must pick as many components with RGB as we can.
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={14} sm={24} style={{ width: '100%' }}>
                    <ProgramsTable />
                </Col>
            </Row>
        </>
    );
}