import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeResolver } from './home.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Home, HomeSchema } from './entities/home.entity';
import { HomeRepository } from './home.repository';

@Module({
  imports:[MongooseModule.forFeature([{name:Home.name,schema:HomeSchema}])],
  providers: [HomeResolver, HomeService,HomeRepository]
})
export class HomeModule {}
