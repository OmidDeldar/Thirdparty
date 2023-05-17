import { Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreatePendingDogeDto {

  tx_id:string
  constructor(init? : CreatePendingDogeDto ) {
  Object.assign(this , init)
  }


}
