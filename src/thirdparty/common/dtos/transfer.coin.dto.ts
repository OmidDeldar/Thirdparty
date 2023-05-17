import { ApiProperty } from '@nestjs/swagger';
import { Allow } from "class-validator";

export class TransferCoinDto {
  @ApiProperty( { example : "TMN8LAAvF2BqVzg38GU9kX7JT98PiUMdnm"})
  @Allow()
  from_address :  string

  @ApiProperty( { example : "TSfakAGDS5yHbHxELeh1GksXJiHqR3jhKp"})
  @Allow()
  to_address :  string

  @ApiProperty( { example : "2"})
  @Allow()
  amount : string

  @ApiProperty( { example : "d8bac40269b181eb282fbb959e12de98fb022487462f3b7ca31882f370003040"})
  @Allow()
  private_key : string


}

