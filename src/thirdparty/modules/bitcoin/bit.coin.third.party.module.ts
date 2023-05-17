import { Module } from '@nestjs/common';

import { CallRpcModule } from "../../../callrpc/call.rpc.module";
import { BitCoinService } from "./service/bit.coin.service";


@Module({
  imports :[
    CallRpcModule
  ] ,
  controllers :[

  ] ,
  providers: [BitCoinService] ,
  exports :[BitCoinService]
})
export class BitCoinThirdPartyModule {}
