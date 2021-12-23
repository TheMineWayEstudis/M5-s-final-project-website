import { DesktopOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Card, Col, Descriptions, PageHeader, Row, Tooltip } from 'antd';

export default function MainScreenHeader() {
    return (
        <Card>
            <PageHeader
                title="Computer building project"
                avatar={{ src: "https://joelcampos.online/images/profilePhoto.png" }}
            >
                <Descriptions.Item>
                    <p style={{textAlign: 'justify'}}>
                        This project was made for the M5 (computer basics) subject. We were asked to design a computer from scratch and create a website where the specifications of that computer can be found (and comparisons to the discarted designs).
                        <br/>
                        The current page is focused on what the project is about and how did I made it (programming languages, frameworks, etc).
                    </p>
                </Descriptions.Item>
            </PageHeader>
        </Card>
    );
}