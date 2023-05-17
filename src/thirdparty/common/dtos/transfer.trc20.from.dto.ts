import { ApiProperty } from '@nestjs/swagger';
import { Allow } from "class-validator";

export class TransferTrc20FromDto {
  @ApiProperty({ default : "TYnBXH9TsuzY8rviUN5EKytKf7D99z3gci"})
  @Allow()
  smart_contract : string

  @ApiProperty({ default : "TMN8LAAvF2BqVzg38GU9kX7JT98PiUMdnm"})
  @Allow()
  from_address : string

  @ApiProperty({ default : "TSfakAGDS5yHbHxELeh1GksXJiHqR3jhKp"})
  @Allow()
  target_address : string

  @ApiProperty({ default : 1})
  @Allow()
  amount : number

  @ApiProperty({ default : "458e1d226d081634c9a17831f3ce3dded2b30965cb3176bfb94969a5297aa5a1"})
  @Allow()
  private_key : string


}

