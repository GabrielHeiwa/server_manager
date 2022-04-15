import { Test, TestingModule } from '@nestjs/testing';
import { DigitalOcean } from './digital-ocean';

describe('DigitalOcean', () => {
  let provider: DigitalOcean;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitalOcean],
    }).compile();

    provider = module.get<DigitalOcean>(DigitalOcean);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
