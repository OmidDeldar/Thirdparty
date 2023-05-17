import { Module } from '@nestjs/common';
import { TronModule } from "../modules/tron/tron.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TronThirdPartyController } from "./controller/tron.third.party.controller";
import { DogeThirdPartyController } from "./controller/doge.third.party.controller";
import { DogeThirdPartyModule } from "../modules/dogecoin/doge.third.party.module";
import { LiteCoinThirdPartyModule } from "../modules/litecoin/lite.coin.third.party.module";
import { BitCoinCashThirdPartyModule } from '../modules/bitcoin-cash/bitcoin.cash.third.party.module';
import { DashThirdPartyModule } from '../modules/dash/dash.third.party.module';
import { LiteThirdPartyController } from './controller/lite.third.party.controller';
import { BitCoinThirdPartyController } from './controller/bitcoin.controller';
import { BitCoinThirdPartyModule } from '../modules/bitcoin/bit.coin.third.party.module';
import { EthereumThirdPartyController } from './controller/ethereum.controller';
import { EthereumModule } from '../modules/eth/ethereum.module';

@Module({
  imports :[
    TronModule ,
    DogeThirdPartyModule ,
    LiteCoinThirdPartyModule ,
    BitCoinCashThirdPartyModule,
    DashThirdPartyModule,
    BitCoinCashThirdPartyModule,
    BitCoinThirdPartyModule,
    EthereumModule,
    TypeOrmModule.forFeature([

    ])
  ] ,
  controllers : [DogeThirdPartyController , TronThirdPartyController, LiteThirdPartyController, BitCoinThirdPartyController,
                 EthereumThirdPartyController]
})
export class ThirdPartyModule {}
