import { User } from '../../types/usersType';
export declare class UsersService {
    private users;
    findAll(): User[];
    findById(id: string): User;
    create(user: User): User;
    update(id: string, user: User): User;
    delete(id: string): string;
}
