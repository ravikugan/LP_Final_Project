import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeResolver } from './home.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Home, HomeSchema } from './entities/home.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:Home.name,schema:HomeSchema}])],
  providers: [HomeResolver, HomeService]
})
export class HomeModule {}
