import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {
    async list(_request: Request, response: Response) {
        try {
            const users = await User.find();
            return response.status(201).json(users);
        } catch (error) {
            return response.status(500).json({
                error: "Something went wrong",
                message: error
            });
        }
    }

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;
        try {

            const userExists = await User.findOne({ email });

            if (userExists) {
                return response.status(400).json({
                    error: "User already exists"
                })
            }

            const user = await User.create({
                name,
                email,
                password,
            });

            return response.status(201).json(user);
        } catch (error) {
            return response.status(500).json({
                error: "Registration failed",
                message: error
            });
        }
    }
}

export default new UserController();