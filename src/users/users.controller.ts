import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
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
    findOne(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

    @Post()
    @HttpCode(201)
    create(@Body() body: any) {
        return this.usersService.create(body);
    }

    @Patch(':id')
    @HttpCode(200)
    updateUser(@Param('id') id: string, @Body() user: User){
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    @HttpCode(204)
    deleteUser(@Param('id') id: string): void {
        this.usersService.delete(id);
    }
}