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
import { NetworkEnum } from 'src/common/enum/network.enum';

@Injectable()
export class BnbSmartChainService extends AbstractThirdPartyClass  implements  AbstractThirdPartyTrc20Class {
  private MAX_UNIT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  private web3: Web3;
  constructor() {
    super();
    let typeNetwork :  NetworkEnum = NetworkEnum.MAIN;
    let url :string=""
    if (typeNetwork==NetworkEnum.MAIN) url="https://bsc-dataseed1.binance.org:443"; else {
      url = "https://data-seed-prebsc-1-s1.binance.org:8545";
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

  async getBalanceCoin(address: any): Promise<BalanceResult> {
    const getBalance =  await this.web3.eth.getBalance(address);
    const balance = bigDecimal.divide( getBalance  ,  Math.pow(10 , 18) ,18)
    return {
      balance ,
      freeze : "0"
    }
  }

 async getBalanceToken(address: string, smart_contract: string): Promise<BalanceResult> {
    let contract = new  this.web3.eth.Contract(await this.getAbiOnline(smart_contract), smart_contract);
    let balance = await contract.methods.balanceOf(address).call()
    let decimal = await contract.methods.decimals().call()
    const result =  (decimal==0) ? balance : Number(new bigDecimal(balance / Math.pow(10 , decimal)).getValue())
    return { balance : result}
  }

  async getDecimalsToken(smart_contract: string): Promise<DecimalsResult> {
    let contract = new  this.web3.eth.Contract(await this.getAbiOnline(smart_contract), smart_contract);
    let decimal = await contract.methods.decimals().call()
    return new DecimalsResult(decimal)
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

  async getAbiOnline(smartContract: string) {
    let resAxiosAbi = await axios.get(`https://api.bscscan.com/api?module=contract&action=getabi&address=${smartContract}&apikey=V3HF87BQQ1GK3MP2H1WADXBDMPF1MN9N3Y`);
    return JSON.parse(resAxiosAbi.data.result);
  }




}
