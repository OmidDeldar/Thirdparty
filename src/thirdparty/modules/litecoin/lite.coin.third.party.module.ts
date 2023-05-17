import { Module } from '@nestjs/common';
import { CallRpcModule } from 'src/callrpc/call.rpc.module';
import { DogeThirdPartyController } from "../../core/controller/doge.third.party.controller";
import { LiteCoinService } from "./service/lite.coin.service";

@Module({
  imports :[
    CallRpcModule
  ] ,
  controllers :[

  ] ,
  providers: [LiteCoinService] ,
  exports :[LiteCoinService]
})
export class LiteCoinThirdPartyModule {}
