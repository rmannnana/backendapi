import { Injectable } from '@nestjs/common';
import { User } from '../../types/usersType';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '1',
            name: 'Hermann NANA',
            email: 'hermann.nana@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: '3',
            name: 'Alvin Jhonson',
            email: 'alvin.jhonson@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: '4',
            name: 'Mohamed Sylla',
            email: 'mohamed.sylla@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: '5',
            name: 'Agent DALTON',
            email: 'agent.dalton@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];

    findAll(): User[] {
        return this.users;
    }
    findById(id: string): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    }
    create(user: User): User {
        const newId = (this.users.length + 1).toString();
        const newUser: User = {
            ...user,
            id: newId,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id: string, user: User): User {
        const index = this.users.findIndex(u => u.id === id);
        this.users[index] = user;
        return user;
    }
    delete(id: string): string {
        this.users = this.users.filter(user => user.id !== id);
        return `User with id ${id} has been deleted.`;
    }
}