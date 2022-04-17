import { Test, TestingModule } from '@nestjs/testing';
import { Ssh } from './ssh';

describe('Ssh', () => {
  let provider: Ssh;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ssh],
    }).compile();

    provider = module.get<Ssh>(Ssh);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
