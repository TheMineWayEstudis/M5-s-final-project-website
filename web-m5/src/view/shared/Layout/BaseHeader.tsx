import { Menu } from 'antd';
import { Header as AntdHeader } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import Route from '../../../routes/Route';

export default function BaseHeader() {
    return (
        <AntdHeader>
            <div className="logo" />

            {/* Navigation menu */}
            <Menu theme="dark" mode="horizontal" selectedKeys={[Route.getCurrent().getPath()]}>
                {headers.map((header: Header) => header.render())}
            </Menu>
        </AntdHeader>
    );
}

class Header {
    route?: Route;
    name: string;
    children?: Header[];
    icon?: JSX.Element;

    constructor(props: { route?: Route, name: string, children?: Header[], icon?: JSX.Element }) {
        this.route = props.route;
        this.name = props.name;
        this.children = props.children;
        this.icon = props.icon;
    }

    item(): JSX.Element {
        return (<Menu.Item key={this.route?.getPath() || null}>{this.name}</Menu.Item>);
    }

    submenu(): JSX.Element {
        return (
            <Menu.SubMenu title={this.name}>
                {this.children!.map((child: Header) => child.render())}
            </Menu.SubMenu>
        );
    }

    render(): JSX.Element {
        if (this.children) {
            if (this.route) return (<Link to={this.route.getPath()}>{this.submenu()}</Link>);
            return this.submenu();
        }
        if (this.route) return <Link to={this.route.getPath()}>{this.item()}</Link>
        return this.item();
    }
}

const headers: Header[] = [

];