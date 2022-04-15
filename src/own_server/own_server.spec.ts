import { Test, TestingModule } from '@nestjs/testing';
import { OwnServer } from './own_server';

describe('OwnServer', () => {
  let provider: OwnServer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OwnServer],
    }).compile();

    provider = module.get<OwnServer>(OwnServer);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
