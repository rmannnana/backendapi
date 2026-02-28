import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return "Hi there! Welcome to our NestJS application.";
  }

  //Appcontroller va faire appel à la méthode createUser du Appservice
  @Post('users')
  createUser(data: { email?: string; phone?: string; countryCode?: string; password?: string; name?: string }) {
    return this.appService.createUser(data);
  }
}
