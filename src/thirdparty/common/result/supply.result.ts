import { ApiProperty } from '@nestjs/swagger';

export class SupplyResult {
  @ApiProperty()
  supply :  string
  constructor( supply : any) {
  this.supply = supply
  }


}

