import { Module } from '@nestjs/common';
import { CallRpcModule } from "../../../callrpc/call.rpc.module";
import { BitCoinCashService } from './services/bitcoin.cash.service';


@Module({
  imports :[
    CallRpcModule
  ] ,
  controllers :[

  ] ,
  providers: [BitCoinCashService] ,
  exports :[BitCoinCashService]
})
export class BitCoinCashThirdPartyModule {}
