import express, { Router } from 'express';
import cors from 'cors';

interface Options {
    port: number;
    routes: Router;
    public_path?: string;
};

export class Server {

    private app = express();
    private readonly port: number;
    private readonly public_path: string;
    private readonly routes: Router;

    constructor( options: Options) {

        const {port, routes, public_path = 'public'} = options;

        this.port = port;
        this.public_path = public_path;
        this.routes = routes;

    }

    async start() {

        //middlewares
        // parse data to json
        this.app.use( express.json() );

        this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded

        this.app.use( express.static( this.public_path ) );

        this.app.use( this.routes );

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })

    }


}



