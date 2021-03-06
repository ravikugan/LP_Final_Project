import { Module } from '@nestjs/common';
import { GraphQLFederationModule,GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EntertainmentModule } from './entertainment/entertainment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';


@Module({
  imports: [EntertainmentModule,GraphQLFederationModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')}
  ),MongooseModule.forRoot(MONGO_CONNECTION)],
  controllers: [],
  providers: [],
})
export class AppModule {}
