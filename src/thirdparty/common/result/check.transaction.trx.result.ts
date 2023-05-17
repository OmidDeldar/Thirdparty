import { ApiProperty } from '@nestjs/swagger';
import bigDecimal from "js-big-decimal";

export class CheckTransactionTrxResult {
  @ApiProperty()
  from  :  string

  @ApiProperty()
  to  :  string



  @ApiProperty()
  amount : string

  @ApiProperty()
  block : string

  @ApiProperty()
  tx_id : string

  @ApiProperty()
  timestamp : string

  @ApiProperty()
  confirmations? : number

  @ApiProperty()
  contract_ret : string

  @ApiProperty()
  confirmed : boolean

  @ApiProperty()
  revert : boolean

  constructor(init? :Record<string , any>) {
    this.tx_id = init.hash
    this.from = init.ownerAddress
    this.to = init.toAddress
    this.block = init.block
    this.confirmations = init.confirmations
    this.amount = bigDecimal.divide(init.contractData.amount , 1000000 , 6)
    this.contract_ret = init.contractRet
    this.confirmed = init.confirmed
    this.revert = init.revert
    this.timestamp = init.timestamp
  }


}

