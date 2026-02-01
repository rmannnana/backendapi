import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from 'types/usersType';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @HttpCode(200)
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    findOne(@Param('id') id: string): User {
        return this.usersService.findById(id);
    }
}
