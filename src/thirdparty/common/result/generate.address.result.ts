import { ApiProperty } from '@nestjs/swagger';

export class GenerateAddressResult {
  @ApiProperty()
  public_key :  string

  @ApiProperty()
  private_key : string

  @ApiProperty()
  address : string



  @ApiProperty()
  memo? : string
}

