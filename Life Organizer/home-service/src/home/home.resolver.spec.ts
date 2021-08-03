import { Test, TestingModule } from '@nestjs/testing';
import { HomeResolver } from './home.resolver';
import { HomeService } from './home.service';

describe('HomeResolver', () => {
  let resolver: HomeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeResolver, HomeService],
    }).compile();

    resolver = module.get<HomeResolver>(HomeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
