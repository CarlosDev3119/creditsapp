import { Request, Response, Router } from "express";
import { UserController } from "./user.controller";



export class UserRoutes {

    static get routes(): Router {

        const router = Router()
        const userController = new UserController();
        
        //creatye user
        router.post('/', userController.createUser);

        // update user
        router.put('/:id', userController.updateUser );

        //delete user
        router.delete('/:id', userController.deleteUser);

        //obtener usuario
        router.get('/:id', userController.getUserById);

        //obtener usuarios
        router.get('/', userController.getUsers);

        return router;

    }

}