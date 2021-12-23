import { Menu } from 'antd';
import { Header as AntdHeader } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import IRoute, { ExternalRoute, Route } from '../../../routes/Route';
import { GithubOutlined } from '@ant-design/icons';

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
    route?: IRoute;
    name: string;
    children?: Header[];
    icon?: JSX.Element;

    constructor(props: { route?: IRoute, name: string, children?: Header[], icon?: JSX.Element }) {
        this.route = props.route;
        this.name = props.name;
        this.children = props.children;
        this.icon = props.icon;
    }

    private item(): JSX.Element {
        return (<Menu.Item key={this.route?.getPath() || null} icon={this.icon}>{this.name}</Menu.Item>);
    }

    private submenu(): JSX.Element {
        return (
            <Menu.SubMenu title={this.name}>
                {this.children!.map((child: Header) => child.render())}
            </Menu.SubMenu>
        );
    }

    private link(child: JSX.Element, route?: IRoute): JSX.Element {
        if(route) {
            if(route.isExternal()) return (<a href={route.getPath()} target={(route as ExternalRoute).newTab ? "_blank" : "_self"}>{child}</a>);
            return (<Link to={route.getPath()}>{child}</Link>);
        }
        return child;
    }

    render(): JSX.Element {
        if (this.children) return this.link(this.submenu(), this.route);
        return this.link(this.item(), this.route);
    }
}

// Menu items
const headers: Header[] = [
    // Main screen header
    new Header({
        route: Route.fromPath('/'),
        name: 'Main screen',
    }),
    new Header({
        name: 'GitHub project',
        route: new ExternalRoute("https://github.com/TheMineWayEstudis/M5-s-final-project-website"),
        icon: <GithubOutlined/>
    }),
];