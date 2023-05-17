import { Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreatePendingBtcDto {

  tx_id:string
  constructor(init? : CreatePendingBtcDto ) {
  Object.assign(this , init)
  }


}
