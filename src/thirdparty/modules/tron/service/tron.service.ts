import { Injectable } from "@nestjs/common";
import { AbstractThirdPartyClass } from "../../../common/class/abstract.third.party.class";

// import TronWeb from "tronweb";
const TronWeb=require("tronweb")
import { TransferCoinDto } from "../../../common/dtos/transfer.coin.dto";
import { TransferTokenDto } from "../../../common/dtos/transfer.token.dto";
import { GenerateAddressResult } from "../../../common/result/generate.address.result";
import { BalanceResult } from "../../../common/result/balance.result";
import { TransferResult } from "../../../common/result/transfer.result";
import axios from 'axios'
import { TransactionTrc20Dto } from "../dtos/transaction.trc20.dto";
import { DecimalsResult } from "../../../common/result/decimals.result";
import { SupplyResult } from "../../../common/result/supply.result";
import { NameResult } from "../../../common/result/name.result";
import {
  CheckTransactionTrxResult
} from "../../../common/result/check.transaction.trx.result";
import { CheckTransactionTrc20Result } from "../../../common/result/check.transaction.trc20.result";
import { AbstractThirdPartyTrc20Class } from "../../../common/class/abstract.third.party.trc20.class";
import { TransferTrc20FromDto } from "../../../common/dtos/transfer.trc20.from.dto";
import { ApproveTrc20Dto } from "../../../common/dtos/approve.trc20.dto";
import { Interval } from "@nestjs/schedule";

const bigDecimal = require("js-big-decimal");

@Injectable()
export class TronService extends AbstractThirdPartyClass  implements  AbstractThirdPartyTrc20Class{


  private tronWeb;
  private NET = "https://api.trongrid.io";
  private API_KEYS : { name : string , apikey : string }[] = [
    { name :"account1" , apikey : "84037e99-68b0-42e7-8093-5f4f145449ad"  } ,
    { name :"account2" , apikey : "74283572-0910-4429-ac70-1d43176054ab"  } ,
    { name :"account3" , apikey : "a093db6c-4659-40ff-a385-8a3cc485f5cd"  } ,
    { name :"account4" , apikey : "0d087ce0-356b-4a2c-93e2-d3715c6ba046"  } ,
    { name :"account5" , apikey : "5f05633c-24be-4eec-baef-9d40ec74aaea"  } ,
    { name :"account6" , apikey : "3d55fc4c-3a27-4ee9-9029-762813e03c28"  } ,
    { name :"account7" , apikey : "46662138-6210-4090-8355-c28e08df96ab"  } ,
    { name :"account8" , apikey : "b176357e-0fd0-4627-a6da-fc4eb8a54294"  } ,
    { name :"account9" , apikey : "2e3d9058-6c39-4c3a-91ac-53b4f9a2cbdf"  } ,
    { name :"account10" , apikey : "ac0a2f3e-9197-4933-bad2-08460f92bf4e"  } ,
    { name :"account11" , apikey : "0e115b56-6177-4160-b5fe-b9fff42699af"  } ,
    { name :"account12" , apikey : "db39219c-89f3-4c5b-8079-0628451508b9"  } ,


  ];
  API_KEY =this.API_KEYS[0].apikey
  private MAX_UNIT = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

  constructor() {
    super();
    this.tronWeb = new TronWeb({
      fullHost: `${this.NET}`,
      headers: { "TRON-PRO-API-KEY": `${this.API_KEY}` },
      fullNode:"http://192.168.35.25:8090",
      solidityNode:"http://192.168.35.25:8091"
    });
  }
  async generateAddress(template?: string): Promise<GenerateAddressResult> {
    try {
      const result = await this.tronWeb.createAccount();
      console.log(result)
      return {
        address: result.address.base58, private_key: result.privateKey, public_key: result.publicKey
      };
    } catch (e) {
      throw e
    }
  }
  async getBalanceCoin(address: any): Promise<BalanceResult> {
    try {

      const resultBalance = await this.tronWeb.trx.getBalance(address);



      const balance: BalanceResult = {
        balance: bigDecimal.divide(resultBalance, 1000000) ,
        freeze : "0"
      };
      return balance;
    } catch (e) {
      // const result = await HandlerError.errorHandler(e);
      // await this.handlerService.handlerException400("FA", result);

    }
  }
  async getBalanceToken(address: string, smart_contract: string): Promise<BalanceResult> {
    try {
      const { abi } = await this.tronWeb.trx.getContract(smart_contract);
      this.tronWeb.setPrivateKey("c6540bb90b4e23b19baaa27f01ae829dac59de1fad93a5b49b299c6f8c915246");
      const contract = await this.tronWeb.contract(abi.entrys, smart_contract);
      const balance = await contract.methods.balanceOf(address).call();
      let decimal = await contract.methods.decimals().call();
      if (decimal == 0) decimal = 1; else decimal = Math.pow(10, decimal);
      return (balance == 0) ? { balance: "0" } : { balance: bigDecimal.divide(balance, decimal) };
    } catch (e) {
      throw e
    }
  }
  async transferCoin( transferCoinDto : TransferCoinDto) :Promise<TransferResult>{
    try {

      let  tradeObj = await this.tronWeb.transactionBuilder.sendTrx(
        transferCoinDto.to_address, bigDecimal.multiply(transferCoinDto.amount , Math.pow(10 , 6)) ,
        transferCoinDto.from_address );
      const signedTransaction = await this.tronWeb.trx.sign(
        tradeObj,   transferCoinDto.private_key );
      const receipt = await this.tronWeb.trx.sendRawTransaction( signedTransaction  );
      if (receipt.code) {
        throw new Error('transaction failed')
      }
      return new TransferResult(receipt.txid)
    } catch (e) {
        
      throw e

    }
  }
  async transferToken( transferTokenDto : TransferTokenDto)  : Promise<TransferResult>{
    try {
      let ratio=0
      this.tronWeb.setPrivateKey(transferTokenDto.private_key);
      let contract = await this.tronWeb.contract().at(transferTokenDto.smart_contract);
      const decimal = await contract.methods.decimals().call();
      if (decimal==0) ratio=1; else
      if (decimal==1) ratio=10 ; else
        ratio=(Math.pow(10,decimal))
      let receipt  = await contract.transfer(
        transferTokenDto.target_address ,
        Number (bigDecimal.multiply(transferTokenDto.amount , ratio)) //amount
      ).send({  feeLimit: 10000000 })
      if (receipt.code) {
        throw new Error('transaction failed')
      }
      return new TransferResult(receipt)
    } catch (e) {
      throw e

    }
  }
  async checkCoinByHash(hash: string): Promise<CheckTransactionTrxResult> {
   try {

     const result = await axios.get(`https://apilist.tronscan.org/api/transaction-info?hash=${hash}`)

     const data :TransactionTrc20Dto = result.data

     return new CheckTransactionTrxResult(data)
   } catch (e) {
     throw e
   }
  }
  async checkTokenByHash(hash: string): Promise<CheckTransactionTrc20Result> {
    try {
      const result = await axios.get(`https://apilist.tronscan.org/api/transaction-info?hash=${hash}`)
      
      const data :TransactionTrc20Dto = result.data
      
      return  new CheckTransactionTrc20Result(data)
    } catch (e) {
      throw e
    }
  }

  async getDecimalsToken( smart_contract: string): Promise<DecimalsResult> {
    try {
      const { abi } = await this.tronWeb.trx.getContract(smart_contract);
      this.tronWeb.setPrivateKey("c6540bb90b4e23b19baaa27f01ae829dac59de1fad93a5b49b299c6f8c915246");
      const contract = await this.tronWeb.contract(abi.entrys, smart_contract);
      let decimal = await contract.methods.decimals().call();
      return new DecimalsResult(decimal)
    } catch (e) {
      throw e
    }
  }
  async getSupplyToken(smart_contract: string): Promise<SupplyResult> {
    try {
      const { abi } = await this.tronWeb.trx.getContract(smart_contract);
      this.tronWeb.setPrivateKey("c6540bb90b4e23b19baaa27f01ae829dac59de1fad93a5b49b299c6f8c915246");
      const contract = await this.tronWeb.contract(abi.entrys, smart_contract);
      let decimal = await contract.methods.decimals().call();
      let supply = await contract.methods.totalSupply().call();
      return new SupplyResult(bigDecimal.divide(this.tronWeb.toDecimal(supply._hex) , Math.pow( 10 , decimal)))
    } catch (e) {
      throw e
    }
  }
  async getNameToken(smart_contract: string): Promise<NameResult> {
    try {
      const { abi } = await this.tronWeb.trx.getContract(smart_contract);
      this.tronWeb.setPrivateKey("c6540bb90b4e23b19baaa27f01ae829dac59de1fad93a5b49b299c6f8c915246");
      const contract = await this.tronWeb.contract(abi.entrys, smart_contract);
      let name = await contract.methods.name().call();

      return new NameResult(name)
    } catch (e) {
      throw e
    }
  }
  async transferFrom(transferTrc20FromDto: TransferTrc20FromDto): Promise<TransferResult> {
    try {
      let ratio=0
      this.tronWeb.setPrivateKey(transferTrc20FromDto.private_key);
      let contract = await this.tronWeb.contract().at(transferTrc20FromDto.smart_contract);
      const decimal = await contract.methods.decimals().call();
      if (decimal==0) ratio=1; else
      if (decimal==1) ratio=10 ; else
        ratio=(Math.pow(10,decimal))
      let result  = await contract.transferFrom(
        transferTrc20FromDto.from_address ,
        transferTrc20FromDto.target_address ,
        Number (bigDecimal.multiply(transferTrc20FromDto.amount , ratio)) //amount
      ).send({  feeLimit: 10000000 })
      return new TransferResult(result)
    } catch (e) {
      throw e

    }
  }
  async approval(approveTrc20Dto: ApproveTrc20Dto): Promise<TransferResult> {
    try {
      this.tronWeb.setPrivateKey(approveTrc20Dto.private_key);
      let contract = await this.tronWeb.contract().at(approveTrc20Dto.smart_contract);

      let result  = await contract.approve(  approveTrc20Dto.spender_address ,
        this.MAX_UNIT ).send({  feeLimit: 10000000 })
      return new TransferResult(result)
    } catch (e) {
      throw e

    }
  }
  
  async getBandWith(address : string) :Promise<number>{
    try {
     return await this.tronWeb.trx.getBandwidth(address)
    } catch (e) {
      throw e
    }
  }
  @Interval(300)
  async selectApiKey() {
  
    const rand = Math.floor(Math.random() * (12 - 1 + 1) + 1)
  
    this.API_KEY=this.API_KEYS[rand-1].apikey
    this.tronWeb.setHeader({"TRON-PRO-API-KEY": this.API_KEY});
  
  
  }

}
