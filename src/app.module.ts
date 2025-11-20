import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HelloModule } from './hello/hello.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TodosModule } from './todos/todos.module';
import { TodosResolver } from './todos/todos.resolver';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:join(process.cwd(),'src/schema.gql'),
      playground:false,
      plugins:[
        ApolloServerPluginLandingPageLocalDefault()

      ]
    }),
    HelloModule,
    TodosModule
  ],
  controllers: [],
  providers: [TodosResolver],
})
export class AppModule {}
