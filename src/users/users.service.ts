import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from '../../types/usersType';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { } // Inject PrismaService

    async create(data: {
        email?: string;
        phone?: string;
        countryCode?: string;
        password?: string;
        name?: string;
    }) {
        if (!data.email && !data.phone) {
            throw new BadRequestException('Email ou téléphone requis');
        }

        return this.prisma.user.create({
            data,
        });
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findById(id: string) {
        const user = this.prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    }

    update(id: string, user: User) {
        return this.prisma.user.update({
            where: {
                id: Number(id)
            },
            data: user
        });
    }

    delete(id: string): string {
        this.prisma.user.delete({
            where: {
                id: Number(id)
            }
        });
        return `User with id ${id} has been deleted.`;
    }
}