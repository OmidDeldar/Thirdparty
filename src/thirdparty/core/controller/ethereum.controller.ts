import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { DogeCoinService } from "../../modules/dogecoin/service/doge.coin.service";
import { EthereumService } from "../../modules/eth/service/ethereum.service";



@ApiBearerAuth('access-token')
@ApiTags('Etheruem-Third-Party')
@ApiHeader({
  name: 'accept-language',
  description: 'language code',
  schema: {
    default: 'EN'
  }
})
@Controller('ethereum-third-party')

export class EthereumThirdPartyController {

  constructor( private ethService :EthereumService ) {

  }

  @ApiOperation({ summary: 'Create Generate Address Full Node eth' })
  @ApiResponse({ status: 201  })
  @Get('/generate')
  createAddress() {
    return this.ethService.generateAddress()
  }

  @ApiOperation({ summary: 'check transaction Full Node eth' })
  @ApiResponse({ status: 201  })
  @Get('/check/transaction')
  checkTransaction(@Query('hash') hash: string) {
    return this.ethService.checkTransaction(hash)
  }

  @ApiOperation({ summary: 'check balance Full Node eth' })
  @ApiResponse({ status: 201  })
  @Get('/check/balance')
  checkBalance(@Query('address') address: string) {
    return this.ethService.checkBalance(address)
  }






}
