import { UsersService } from './users.service';
import type { User } from 'types/usersType';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): User[];
    findOne(id: string): User;
    createUser(user: User): User;
    updateUser(id: string, user: User): User;
    deleteUser(id: string): void;
}
