import { GithubOutlined, GooglePlusOutlined, LinkedinOutlined, ThunderboltOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Divider, Space, Tooltip } from 'antd';
import { Footer } from 'antd/lib/layout/layout';

export default function BaseFooter() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <Space>
                <small>Joel Campos Oliva - {new Date().getFullYear()}</small>
                <Divider type='vertical'/>
                <a href='https://github.com/TheMineWay' target='_blank'><GithubOutlined/></a>
                <a href='https://www.linkedin.com/in/joelcamposoliva/' target='_blank'><LinkedinOutlined /></a>
                <a href='https://www.youtube.com/channel/UCG0E6e3XrMd5Spzee0JPCRg' target='_blank'><YoutubeOutlined /></a>
                <a href='https://themineway.itch.io/' target='_blank'><ThunderboltOutlined /></a>
                <Tooltip
                    title="WTF, I don't have that sh*t"
                >
                    <a><GooglePlusOutlined /></a>
                </Tooltip>
            </Space>
        </Footer>
    );
}