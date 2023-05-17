import { Module } from '@nestjs/common';
import { CallRpcModule } from "../../../callrpc/call.rpc.module";
import { DashService } from './services/dash.service';

@Module({
  imports :[
    CallRpcModule
  ] ,
  controllers :[

  ] ,
  providers: [DashService] ,
  exports :[DashService]
})
export class DashThirdPartyModule {}
