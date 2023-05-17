import { Module } from '@nestjs/common';
import { CallRpcService } from "./call.rpc.service";
@Module({
  providers: [CallRpcService]
})
export class CallRpcModule {}
