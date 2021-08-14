import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationResolver } from './education.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Education, EducationSchema } from './entities/education.entity';
import { EducationRepository } from './education.repository';

@Module({
  imports:[MongooseModule.forFeature([{name:Education.name, schema:EducationSchema}])],
  providers: [EducationResolver, EducationService,EducationRepository]
})
export class EducationModule {}
