import { ApiProperty } from '@nestjs/swagger';
import { Allow } from "class-validator";

export class TransferTokenDto {
  @ApiProperty({ default : "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"})
  @Allow()
  smart_contract : string

  @ApiProperty({ default : "TMN8LAAvF2BqVzg38GU9kX7JT98PiUMdnm"})
  @Allow()
  target_address : string

  @ApiProperty({ default : 1})
  @Allow()
  amount : number

  @ApiProperty( { default : "458e1d226d081634c9a17831f3ce3dded2b30965cb3176bfb94969a5297aa5a1"})
  @Allow()
  private_key : string


}

