import { Module } from '@nestjs/common';
import { BnbSmartChainService } from "./service/bnb.smart.chain.service";


@Module({
  providers: [BnbSmartChainService]
})
export class BnbSmartChainModule {}
