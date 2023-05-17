import { ApiProperty } from '@nestjs/swagger';
import bigDecimal from "js-big-decimal";

export class CheckTransactionTrc20Result {
  @ApiProperty()
  spender  :  string

  @ApiProperty()
  from  :  string

  @ApiProperty()
  to  :  string

  @ApiProperty()
  contract : string

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
  decimal : number

  @ApiProperty()
  symbol : string

  @ApiProperty()
  type_token : string

  @ApiProperty()
  type_function : string

  @ApiProperty()
  contract_ret : string


  @ApiProperty()
  confirmed : boolean

  @ApiProperty()
  revert : boolean

  constructor(init? :Record<string , any>) {
    this.tx_id = init.hash


    this.contract = init.toAddress
    this.block = init.block
    this.confirmations = init.confirmations

    this.contract_ret = init.contractRet
    this.confirmed = init.confirmed
    this.revert = init.revert


    this.timestamp = init.timestamp
    if (init.trigger_info) {
      
      if (init.trigger_info.method.startsWith("transferFrom")) {
        this.from = init.trigger_info.parameter.sender
        this.to = init.trigger_info.parameter.recipient
        
        if (!this.to) {
          this.to = init.trigger_info.parameter._to
        }
        
        this.amount = bigDecimal.divide(init.trigger_info.parameter.amount ,
          Math.pow(10 ,init.trc20TransferInfo[0].decimals ) , init.trc20TransferInfo[0].decimals)
          if (this.amount == '0'){
            this.amount = bigDecimal.divide(init.trigger_info.parameter._value ,
              Math.pow(10 ,init.trc20TransferInfo[0].decimals ) , init.trc20TransferInfo[0].decimals)
          }
        this.type_function = "transferFrom"
        this.decimal = init.trc20TransferInfo[0].decimals
        this.symbol = init.trc20TransferInfo[0].symbol
        this.type_token = (init.tokenTransferInfo) ?  init.tokenTransferInfo.tokenType : "null"
      } else if (init.trigger_info.method.startsWith("transfer")){

        
        this.from = init.ownerAddress
        this.to = init.trigger_info.parameter._to
        
        if (!this.to) {
          this.to = init.trigger_info.parameter.recipient
        }
        this.amount = bigDecimal.divide(init.trigger_info.parameter.amount ,
          Math.pow(10 ,init.trc20TransferInfo[0].decimals ) , init.trc20TransferInfo[0].decimals)
          if (this.amount == '0'){
            this.amount = bigDecimal.divide(init.trigger_info.parameter._value ,
              Math.pow(10 ,init.trc20TransferInfo[0].decimals ) , init.trc20TransferInfo[0].decimals)
          }
        this.type_function = "transfer"
        this.decimal = init.trc20TransferInfo[0].decimals
        this.symbol = init.trc20TransferInfo[0].symbol
        this.type_token = (init.tokenTransferInfo) ?  init.tokenTransferInfo.tokenType : "null"
      } else  if (init.trigger_info.method.startsWith("approve")) {
        this.spender = init.trigger_info.parameter.spender
        this.type_function = "approve"
      }
    }

  }

}

