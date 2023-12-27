import { NextFunction, Request, Response } from "express";
import userService from "../service/user.service";
import { UserDTO } from "../dto/user";

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let dob = req.body.dob;
        let active = req.body.active;

        const user : UserDTO = {email, password, firstName, lastName, dob, active};
        const ret = await userService.createUser(user);

        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }    
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ret = await userService.getAll();

        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }    
};