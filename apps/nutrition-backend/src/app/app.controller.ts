import { Controller, Get } from '@nestjs/common';



@Controller()
export class AppController {
  constructor() {
    //
  }

  @Get()
  getData() {
    return "Hello World!";
  }
}
