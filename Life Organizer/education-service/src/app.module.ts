import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EducationModule } from './education/education.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_CONNECTION } from './app.properties';


@Module({
  imports: [EducationModule,GraphQLFederationModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')}
  ),MongooseModule.forRoot(MONGODB_CONNECTION)],
  controllers: [],
  providers: [],
})
export class AppModule {}
