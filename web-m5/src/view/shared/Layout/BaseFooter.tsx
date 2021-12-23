import { Footer } from 'antd/lib/layout/layout';

export default function BaseFooter() {
    return (
        <Footer style={{ textAlign: 'center' }}>Joel Campos Oliva - {new Date().getFullYear()}</Footer>
    );
}