import { Module } from '@nestjs/common';
import { EthereumService } from "./service/ethereum.service";


@Module({
  providers: [EthereumService] ,
  exports :[EthereumService]

})
export class EthereumModule {}
