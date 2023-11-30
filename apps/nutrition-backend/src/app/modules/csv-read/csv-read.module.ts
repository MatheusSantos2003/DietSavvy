import { Module } from '@nestjs/common';
import { CsvReadService } from './csv-read.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntity } from '../../entities/food.entity';

@Module({
  controllers: [],
  providers: [CsvReadService],
  imports: [
  TypeOrmModule.forFeature([FoodEntity]),
  ],
  exports:[CsvReadService]
})
export class CsvReadModule {}
