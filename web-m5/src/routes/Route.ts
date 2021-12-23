import path from "path/posix";

export class Route implements IRoute {
    path: string[];

    public constructor(path: string[]) {
        this.path = path;
    }

    /* METHODS */
    getPath(): string {
        return this.path.join("/");
    }

    isExternal(): boolean {
        return false;
    }

    /* STATIC */
    static fromPath(path: string): Route {
        return new Route(['/',''].includes(path) ? ['/'] : path.split('/').map(this.processRoute));
    }

    static getCurrent(): Route {
        return Route.fromPath(window.location.pathname);
    }

    static processRoute(route: string): string {
        return route.toLowerCase();
    }
}

export class ExternalRoute implements IRoute {
    path: string;
    newTab: boolean;

    constructor(path: string, newTab: boolean = true) {
        this.path = path;
        this.newTab = newTab;
    }

    getPath(): string {
        return this.path;
    }
    
    isExternal(): boolean {
        return true;
    }
}

export default interface IRoute {
    getPath(): string;
    isExternal(): boolean;
}