export default class Route {
    path: string[];

    public constructor(path: string[]) {
        this.path = path;
    }

    /* METHODS */
    getPath(): string {
        return this.path.join("/");
    }

    /* STATIC */
    static fromPath(path: string): Route {
        return new Route(['/',''].includes(path) ? ['/'] : path.split('/').map(this.processRoute));
    }

    static processRoute(route: string): string {
        return route.toLowerCase();
    }
}