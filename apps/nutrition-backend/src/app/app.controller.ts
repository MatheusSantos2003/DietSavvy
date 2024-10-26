import { Controller, Get } from '@nestjs/common';
import { CsvReadService } from './modules/csv-read/csv-read.service';



@Controller()
export class AppController {
  constructor(private csvReadService: CsvReadService) {
    //
  }

  @Get()
  getData() {
    return "Hello World!";
  }


  // @Get('/csv-read')
  // readCSV() {
  //   this.csvReadService.lerCSV();
  // }

}
