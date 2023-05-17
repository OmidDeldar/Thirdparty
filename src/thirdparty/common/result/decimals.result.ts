import { ApiProperty } from '@nestjs/swagger';

export class DecimalsResult {
  @ApiProperty()
  decimals :  number
  constructor(decimals : number) {
    this.decimals = decimals
  }

}

