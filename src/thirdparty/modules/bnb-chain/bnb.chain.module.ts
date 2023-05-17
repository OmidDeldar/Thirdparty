import { Module } from '@nestjs/common';
import { BnbChainService } from "./service/bnb.chain.service";




@Module({
  providers: [BnbChainService] ,
  exports :[BnbChainService]
})
export class BnbChainModule {}
