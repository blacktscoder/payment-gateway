// // src/grpc/grpc.module.ts
// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { PaymentController } from './payment.controller';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'PAYMENT_PACKAGE',
//         transport: Transport.GRPC,
//         options: {
//           url: 'localhost:50051',
//           package: 'payment',
//           protoPath: 'src/grpc/payment.proto',
//         },
//       },
//     ]),
//   ],
//   controllers: [PaymentController],
// })
// export class GRPCModule {}
