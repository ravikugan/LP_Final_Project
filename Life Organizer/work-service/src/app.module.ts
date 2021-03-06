import { Module } from '@nestjs/common';
import { GraphQLFederationModule,GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MONGODB_CONNECTION } from './app.properties';
import { WorkModule } from './work/work.module';


@Module({
  imports: [WorkModule,GraphQLFederationModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')}
  ),MongooseModule.forRoot(MONGODB_CONNECTION)],
  controllers: [],
  providers: [],
})
export class AppModule {}
