import { ApiProperty } from '@nestjs/swagger';
import { Allow } from "class-validator";

export class ApproveTrc20Dto {
  @ApiProperty({ default : "TYnBXH9TsuzY8rviUN5EKytKf7D99z3gci"})
  @Allow()
  smart_contract : string


  @ApiProperty({ default : "TSfakAGDS5yHbHxELeh1GksXJiHqR3jhKp"})
  @Allow()
  spender_address : string

  // @ApiProperty({ default : 1})
  // @Allow()
  // amount : number

  @ApiProperty( { default : "d8bac40269b181eb282fbb959e12de98fb022487462f3b7ca31882f370003040"})
  @Allow()
  private_key : string


}

