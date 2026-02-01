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
}
