import { ApiProperty } from '@nestjs/swagger';

export class BalanceResult {
  @ApiProperty()
  balance :  string
  @ApiProperty()
  freeze? :  string

}

