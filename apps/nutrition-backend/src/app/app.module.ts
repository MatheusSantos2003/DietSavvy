import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { UserEntity } from './entities/user.entity';
import { CsvReadModule } from './modules/csv-read/csv-read.module';
import { CsvReadService } from './modules/csv-read/csv-read.service';
import { FoodEntity } from './entities/food.entity';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_URL || 'localhost',
      port: 5432,
      username: process.env.DB_USER || 'test',
      password: process.env.DB_PASSWORD || 'test',
      database: process.env.DB_DEFAULT_DB || 'test',
      synchronize: true,
      logging: false,
      entities: [UserEntity,FoodEntity],
    }),
    CsvReadModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
