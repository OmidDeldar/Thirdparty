import { ApiProperty } from '@nestjs/swagger';
export class ContractDataDto {
  amount: number
  owner_address: string
  to_address: string
}
export class ParameterTriggerInfoDto {
  amount : string
  recipient : string

}

export class TriggerInfoDto {
  method : string
  contract_address : string
  call_value : string
  parameter : ParameterTriggerInfoDto
}
export class TokenTransferInfoDto {
  icon_url : string
  symbol : string
  level : string
  decimals : number
  name : string
  to_address : string
  contract_address : string
  type : string
  vip :boolean
  tokenType : string
  from_address : string
  amount_str : string
}
export class TransactionTrxDto {
  block : string
  hash : string
  timestamp : number
  ownerAddress : string
  contractType : number
  toAddress : string
  project : string
  confirmations :number
  confirmed : boolean
  revert : boolean
  contractRet : string
  contractData : ContractDataDto



}

