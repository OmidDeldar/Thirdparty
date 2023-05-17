import { Allow, Matches } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateTransferDogeDto {
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
  constructor(init? :CreateTransferDogeDto) {
  Object.assign(this , init)
  }


}
