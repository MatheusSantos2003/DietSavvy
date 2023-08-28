import { User } from '@nutrition-app/models';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TransformInterceptor } from '../../api-response.interceptor';
import { AuthGuard } from './auth.guard';

@Controller('auth')
@UseInterceptors(TransformInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/list')
  async listAllUsers() {
    return await this.authService.listAllUsers();
  }

  @HttpCode(HttpStatus.OK)
  @Post('/register')
  @UseInterceptors(TransformInterceptor)
  async createUser(@Body() user:User ) {
    return await this.authService.createUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  @UseInterceptors(TransformInterceptor)
  async login(@Body() user:User ) {
    return await this.authService.login(user);
  }
}
