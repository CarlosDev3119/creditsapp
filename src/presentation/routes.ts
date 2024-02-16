import { Request, Response, Router } from "express";
import { UserRoutes } from "./users/users.routes";


export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        
        router.use('/api/v1/credits/users', UserRoutes.routes);
      

        return router;

    }

}