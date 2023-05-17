import { Module } from '@nestjs/common';
import { DogeCoinService } from './service/doge.coin.service';
import { CallRpcModule } from "../../../callrpc/call.rpc.module";

@Module({
  imports :[
    CallRpcModule
  ] ,
  controllers :[

  ] ,
  providers: [DogeCoinService] ,
  exports :[DogeCoinService]
})
export class DogeThirdPartyModule {}
