import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { UserDTO } from "../dto/user";

 class UserService {

    static prisma = new PrismaClient();

    createUser = async (input: UserDTO) =>  {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hashSync(input.password, salt)

        return await UserService.prisma.user.create({
            data: {
                email: input.email,
                password: hash,
                firstName: input.firstName, 
                lastName: input.lastName,
                dob: new Date(input.dob),
                active: false,
            }
        });
    }

    findByEmail = async (email: string) => {
        return await UserService.prisma.user.findUnique({
            where: {
                email: email,
            }
        });
    }

    getAll = async () => {
        return await UserService.prisma.user.findMany();
    }

}

export default new UserService();