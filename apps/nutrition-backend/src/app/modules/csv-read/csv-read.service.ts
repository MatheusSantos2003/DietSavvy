import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { FoodEntity } from '../../entities/food.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CsvReadService {

  constructor(
    @InjectRepository(FoodEntity)
    private foodRepository: Repository<FoodEntity>,
    ) {

  }

  // async lerCSV() {
  //   let results = [];

  //   const conteudoArquivo = await fs.promises.readFile('/home/matheus/projects/DietSavvy/apps/nutrition-backend/src/assets/taco_phase_5.json', 'utf-8')
  //   const jsonData = JSON.parse(conteudoArquivo)

  //   results = [...jsonData];

  //   await this.foodRepository.save(results);

  // }

}
