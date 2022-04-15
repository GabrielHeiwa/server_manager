import { Test, TestingModule } from '@nestjs/testing';
import { Docker } from './docker';

describe('Docker', () => {
  let provider: Docker;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Docker],
    }).compile();

    provider = module.get<Docker>(Docker);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
