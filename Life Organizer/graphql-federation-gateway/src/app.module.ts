import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';


@Module({
  imports: [GraphQLGatewayModule.forRoot({
    server:{
      cors:true
    },
    gateway:{
      serviceList:[
        {name:"education",url:"http://localhost:3000/graphql"},
        {name:"entertainment",url:"http://localhost:3001/graphql"},
        {name:"home",url:"http://localhost:3002/graphql"},
        {name:"work",url:"http://localhost:3003/graphql"}
      ]
    }
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
