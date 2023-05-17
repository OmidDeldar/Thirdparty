import { ApiProperty } from '@nestjs/swagger';

export class TransferResult {
  tx_id :  string
  link : string
  constructor(txId :  string) {
    this.tx_id = txId
    this.link=`https://tronscan.io/#/transaction/${txId}`
  }

}

