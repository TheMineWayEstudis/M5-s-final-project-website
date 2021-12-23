import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import BaseHeader from './BaseHeader';
import BaseFooter from './BaseFooter';
import './layout.css';
import NavigatorBreadcrumb from './NavigatorBreadcrumb';

export default function BaseLayout(props: { children: JSX.Element[] | JSX.Element }) {
    return (
        <Layout className="layout">
            <BaseHeader/>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <BaseFooter/>
        </Layout>
    );
}