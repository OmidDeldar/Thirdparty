import { Allow, Matches } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateTransferBtcDto {
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
  constructor(init? :CreateTransferBtcDto) {
  Object.assign(this , init)
  }


}
