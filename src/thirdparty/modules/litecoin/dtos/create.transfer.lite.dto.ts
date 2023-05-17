import { Allow, Matches } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateTransferLiteDto {
  @ApiProperty()
  @Allow()
  targetWallet:string

  @ApiProperty()
  @Allow()
  amount:number

  @ApiProperty()
  @Allow()
  commentFrom:string

  @ApiProperty()
  @Allow()
  commentTo:string

  @ApiProperty()
  @Allow()
  subtractFee:boolean
  constructor(init? :CreateTransferLiteDto) {
  Object.assign(this , init)
  }


}
