import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MONGODB_CONNECTION } from './app.properties';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';

@Module({
  imports: [HomeModule,MongooseModule.forRoot(MONGODB_CONNECTION)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
