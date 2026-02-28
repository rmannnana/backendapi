import { Injectable, Post } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}

  getHello(): string {
    return 'Hello World!';
  }

  //Méthode createuser du Appservice qui est appelée par le Appcontroller et qui va faire appel à la méthode create du UsersService
  createUser(data: { email?: string; phone?: string; countryCode?: string; password?: string; name?: string }) {
    return this.usersService.create(data);
  }
}
