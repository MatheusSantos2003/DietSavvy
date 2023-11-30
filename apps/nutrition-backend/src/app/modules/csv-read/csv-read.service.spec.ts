import { Test, TestingModule } from '@nestjs/testing';
import { CsvReadService } from './csv-read.service';

describe('CsvReadService', () => {
  let service: CsvReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvReadService],
    }).compile();

    service = module.get<CsvReadService>(CsvReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
