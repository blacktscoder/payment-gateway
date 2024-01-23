import { Module } from '@nestjs/common';
import { GraphqlController } from './graphql.controller';
import { GraphqlService } from './graphql/graphql.service';
import { GraphqlResolver } from './graphql/graphql.resolver';
import { PaymentModule } from 'src/payment/payment.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  controllers: [GraphqlController],
  providers: [GraphqlService, GraphqlResolver],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    PaymentModule
  ]
})
export class GraphqlModule {}
