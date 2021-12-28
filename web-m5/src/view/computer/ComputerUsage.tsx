import { Card, Col, Row, Image } from 'antd';
import ProgramsTable from '../programs/ProgramsTable';
import SectionTitle from '../shared/components/SectionTitle';

export default function ComputerUsage() {
    return (
        <>
            <SectionTitle>About the computer usage</SectionTitle>
            <br/>
            <Row gutter={[24,24]}>
                <Col lg={10} sm={24} style={{display: 'flex'}}>
                    <Card
                        style={{width: '100%'}}
                    >
                        <h2
                            style={{fontWeight: 'bold'}}
                        >What is the aim of the computer?</h2>

                        <p style={{textAlign: 'justify'}}>
                            Before I start designing the computer I have to think about what am I going to use the computer for. As a result it shows up I'm currently using my computer to play videogames, study (IT) and develop solutions for personal projects.
                        </p>
                    </Card>
                </Col>
                <Col lg={14} sm={24} style={{width: '100%'}}>
                    <ProgramsTable/>
                </Col>
            </Row>
        </>
    );
}