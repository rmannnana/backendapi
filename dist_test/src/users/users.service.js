"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
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
    findAll() {
        return this.users;
    }
    findById(id) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    }
    create(user) {
        const newId = (this.users.length + 1).toString();
        const newUser = {
            ...user,
            id: newId,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, user) {
        const index = this.users.findIndex(u => u.id === id);
        this.users[index] = user;
        return user;
    }
    delete(id) {
        this.users = this.users.filter(user => user.id !== id);
        return `User with id ${id} has been deleted.`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map