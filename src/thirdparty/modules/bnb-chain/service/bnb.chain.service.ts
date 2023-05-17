import { Injectable } from '@nestjs/common';
import { AbstractThirdPartyClass } from "../../../common/class/abstract.third.party.class";
import { AbstractThirdPartyTrc20Class } from "../../../common/class/abstract.third.party.trc20.class";
import { ApproveTrc20Dto } from "../../../common/dtos/approve.trc20.dto";
import { TransferResult } from "../../../common/result/transfer.result";
import { CheckTransactionTrxResult } from "../../../common/result/check.transaction.trx.result";
import { GenerateAddressResult } from "../../../common/result/generate.address.result";
import { BalanceResult } from "../../../common/result/balance.result";
import { CheckTransactionTrc20Result } from "../../../common/result/check.transaction.trc20.result";
import { DecimalsResult } from "../../../common/result/decimals.result";
import { NameResult } from "../../../common/result/name.result";
import { SupplyResult } from "../../../common/result/supply.result";
import { TransferCoinDto } from "../../../common/dtos/transfer.coin.dto";
import { TransferTrc20FromDto } from "../../../common/dtos/transfer.trc20.from.dto";
import { TransferTokenDto } from "../../../common/dtos/transfer.token.dto";
import Web3 from "web3";
import axios from "axios";
import bigDecimal from "js-big-decimal";

@Injectable()
export class BnbChainService extends AbstractThirdPartyClass   {
  constructor() {
    super();
  }
  checkCoinByHash(hash: string): Promise<CheckTransactionTrxResult> {
    return Promise.resolve(undefined);
  }

  checkTokenByHash(hash: string): Promise<CheckTransactionTrc20Result> {
    return Promise.resolve(undefined);
  }

  async generateAddress(template?: string): Promise<GenerateAddressResult> {
   const generateAddressResult :GenerateAddressResult = {
     address : process.env.BNB_CHAIN_PUBLIC_KEY ,
     memo : null ,
     private_key : null ,
     public_key  :process.env.BNB_CHAIN_PUBLIC_KEY
   }
   return generateAddressResult

  }

  getBalanceCoin(address: any): Promise<BalanceResult> {
    return Promise.resolve(undefined);
  }

  getBalanceToken(address: string, smart_contract: string): Promise<BalanceResult> {
    return Promise.resolve(undefined);
  }

  getDecimalsToken(smart_contract: string): Promise<DecimalsResult> {
    return Promise.resolve(undefined);
  }

  getNameToken(smart_contract: string): Promise<NameResult> {
    return Promise.resolve(undefined);
  }

  getSupplyToken(smart_contract: string): Promise<SupplyResult> {
    return Promise.resolve(undefined);
  }

  transferCoin(transferCoinDto: TransferCoinDto): Promise<TransferResult> {
    return Promise.resolve(undefined);
  }

  transferToken(transferTokenDto: TransferTokenDto): Promise<TransferResult> {
    return Promise.resolve(undefined);
  }





}
