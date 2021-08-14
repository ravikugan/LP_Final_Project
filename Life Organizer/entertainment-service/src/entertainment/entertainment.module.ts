import { Module } from '@nestjs/common';
import { EntertainmentService } from './entertainment.service';
import { EntertainmentResolver } from './entertainment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Entertainment, EntertainmentSchema } from './entities/entertainment.entity';
import { EntertainmentRepository } from './entertainment.repository';

@Module({
  imports:[MongooseModule.forFeature([{name:Entertainment.name, schema:EntertainmentSchema}])],
  providers: [EntertainmentResolver, EntertainmentService,EntertainmentRepository]
})
export class EntertainmentModule {}
