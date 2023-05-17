import { Module } from '@nestjs/common';
import { TronService } from './service/tron.service';

@Module({
  imports :[
  ] ,
  providers: [TronService] ,
  exports :[TronService]
})
export class TronModule {}
