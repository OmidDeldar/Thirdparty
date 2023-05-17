import { ApiProperty } from '@nestjs/swagger';

export class NameResult {
  @ApiProperty()
  name :  string
constructor( name : string) {
this.name=name
  }
}

