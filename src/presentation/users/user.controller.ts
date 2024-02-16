import { Request, Response } from "express";



export class UserController {

    //DI
    constructor(

    ){}

    public getUserById = (req: Request, res: Response) => {

        res.json({
            msg: 'get user by id'
        });
    }

    public getUsers = (req: Request, res: Response) => {

        res.json({
            msg: 'get users'
        });
    }

    public deleteUser = (req: Request, res: Response) => {

        res.json({
            msg: 'delete User'
        });
    }

    public updateUser = (req: Request, res: Response) => {

        res.json({
            msg: 'update user'
        });
    }

    public createUser = (req: Request, res: Response) => {

        res.json({
            msg: 'createUser'
        });
    }

}