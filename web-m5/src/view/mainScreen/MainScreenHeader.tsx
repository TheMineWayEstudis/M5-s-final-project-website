import { Card } from 'antd';

export default function MainScreenHeader() {
    return (
        <Card>
            <h1 style={{fontWeight: 'bold'}}>Computer building project</h1>
            <p style={{textAlign: 'justify'}}>
                This project was made for the M5 (computer basics) subject. We were asked to design a computer from scratch and create a website where the specifications of that computer can be found (and comparisons to the discarted designs).
                <br/>
                The current page is focused on what the project is about and how did I made it (programming languages, frameworks, etc).
            </p>
        </Card>
    );
}