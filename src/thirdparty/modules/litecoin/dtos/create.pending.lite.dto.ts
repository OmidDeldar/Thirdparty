import { Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreatePendingLiteDto {

  tx_id:string
  constructor(init? : CreatePendingLiteDto ) {
  Object.assign(this , init)
  }


}
