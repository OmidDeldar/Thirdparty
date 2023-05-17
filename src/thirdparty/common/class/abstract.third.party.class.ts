
import { GenerateAddressResult } from "../result/generate.address.result";
import { BalanceResult } from "../result/balance.result";
import { TransferCoinDto } from "../dtos/transfer.coin.dto";
import { TransferTokenDto } from "../dtos/transfer.token.dto";
import { TransferResult } from "../result/transfer.result";

import { DecimalsResult } from "../result/decimals.result";
import { SupplyResult } from "../result/supply.result";
import { NameResult } from "../result/name.result";
import { CheckTransactionTrc20Result } from "../result/check.transaction.trc20.result";
import { CheckTransactionTrxResult } from "../result/check.transaction.trx.result";

export abstract class AbstractThirdPartyClass  {

  protected constructor() {

  }
   abstract  generateAddress(template?: string ): Promise<GenerateAddressResult>
  abstract  getBalanceCoin(address: any ): Promise<BalanceResult>
  abstract  getBalanceToken(address: string  , smart_contract :  string): Promise<BalanceResult>
  abstract  getDecimalsToken( smart_contract :  string): Promise<DecimalsResult>
  abstract  getSupplyToken( smart_contract :  string): Promise<SupplyResult>
  abstract  getNameToken( smart_contract :  string): Promise<NameResult>
   abstract  transferCoin(transferCoinDto : TransferCoinDto) : Promise<TransferResult>
  abstract  transferToken(transferTokenDto : TransferTokenDto) : Promise<TransferResult>
  abstract  checkCoinByHash(hash : string) : Promise<CheckTransactionTrxResult>
  abstract  checkTokenByHash(hash : string) : Promise<CheckTransactionTrc20Result>



}