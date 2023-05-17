import { Injectable } from '@nestjs/common';
import { AbstractThirdPartyClass } from "../../../common/class/abstract.third.party.class";
import { AbstractThirdPartyTrc20Class } from "../../../common/class/abstract.third.party.trc20.class";
import { TransferResult } from "../../../common/result/transfer.result";
import { ApproveTrc20Dto } from "../../../common/dtos/approve.trc20.dto";
import { CheckTransactionTrc20Result } from "../../../common/result/check.transaction.trc20.result";
import { GenerateAddressResult } from "../../../common/result/generate.address.result";
import { BalanceResult } from "../../../common/result/balance.result";
import { CheckTransactionTrxResult } from "../../../common/result/check.transaction.trx.result";
import { DecimalsResult } from "../../../common/result/decimals.result";
import { NameResult } from "../../../common/result/name.result";
import { SupplyResult } from "../../../common/result/supply.result";
import { TransferCoinDto } from "../../../common/dtos/transfer.coin.dto";
import { TransferTrc20FromDto } from "../../../common/dtos/transfer.trc20.from.dto";
import { TransferTokenDto } from "../../../common/dtos/transfer.token.dto";
// import Web3 from 'web3';
const Web3 = require('web3')
import { type } from "os";
import { NetworkEnum } from 'src/common/enum/network.enum';
@Injectable()
export class EthereumService extends AbstractThirdPartyClass  implements  AbstractThirdPartyTrc20Class{
  private MAX_UNIT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  private web3
  constructor() {
    super()
    let typeNetwork :  NetworkEnum = NetworkEnum.MAIN;
    let url :string=""
    if (typeNetwork==NetworkEnum.MAIN) url="https://mainnet.infura.io/v3/08615a28ddf548d6adf0bf0b1242d20b"; else {
      url = "http://127.0.0.1:8585";
    }

    this.web3=new Web3(url)

  }



  approval(approveTrc20Dto: ApproveTrc20Dto): Promise<TransferResult> {
    return Promise.resolve(undefined);
  }

  checkCoinByHash(hash: string): Promise<CheckTransactionTrxResult> {
    return Promise.resolve(undefined);
  }

  checkTokenByHash(hash: string): Promise<CheckTransactionTrc20Result> {
    return Promise.resolve(undefined);
  }

  async generateAddress(template?: string): Promise<GenerateAddressResult> {
    const result =   await this.web3.eth.accounts.create()
    const response : GenerateAddressResult = {
      address : result.address ,
      memo : "" ,
      public_key : result.address ,
      private_key : result.privateKey
    }
    return  response
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

  transferFrom(transferTrc20FromDto: TransferTrc20FromDto): Promise<TransferResult> {
    return Promise.resolve(undefined);
  }

  transferToken(transferTokenDto: TransferTokenDto): Promise<TransferResult> {
    return Promise.resolve(undefined);
  }



  async checkTransaction(hash: string){
    const result =  await this.web3.eth.getTransaction(hash);
    
    return result
  }


  async checkBalance(address: string){
    const result = await this.web3.eth.getBalance(address);;
    return result;
  }
}
