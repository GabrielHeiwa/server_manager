import { Test, TestingModule } from '@nestjs/testing';
import { Telnet } from './telnet';

describe('Telnet', () => {
  let provider: Telnet;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Telnet],
    }).compile();

    provider = module.get<Telnet>(Telnet);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
