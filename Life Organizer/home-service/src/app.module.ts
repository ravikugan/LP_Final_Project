import { Module } from '@nestjs/common';
import { GraphQLFederationModule,GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MONGODB_CONNECTION } from './app.properties';
import { HomeModule } from './home/home.module';

@Module({
  imports: [HomeModule,MongooseModule.forRoot(MONGODB_CONNECTION),GraphQLFederationModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')}
  )]
})
export class AppModule {}
