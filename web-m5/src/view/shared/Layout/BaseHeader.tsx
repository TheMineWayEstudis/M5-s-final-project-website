import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'

export default function BaseHeader() {
    return (
        <Header>
            <div className="logo" />

            {/* Navigation menu */}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key={1}>{`nav ${1}`}</Menu.Item>
            </Menu>
        </Header>
    );
}