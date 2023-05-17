import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { BitCoinService } from "../../modules/bitcoin/service/bit.coin.service";




@ApiBearerAuth('access-token')
@ApiTags('Third-Party-bitcoin')
@ApiHeader({
  name: 'language-code',
  description: 'language code',
  schema: {
    default: 'FA'
  }
})
@Controller('third-party-bitcoin')

export class BitCoinThirdPartyController {

  constructor( private bitCoinService :BitCoinService ) {

  }

  @ApiOperation({ summary: 'Create Generate Address Full Node bitcoin' })
  @ApiResponse({ status: 201  })
  @Get('/generate')
  createAddress() {
    return this.bitCoinService.generateAddress()
  }

  @ApiOperation({ summary: 'Create N number Generate Address Full Node bitcoin' })
  @ApiResponse({ status: 201  })
  @Get('/generate/:count')
  createAddressByCount(@Param('count') count: number) {
    for (let index = 0; index < count; index++) {
      return this.bitCoinService.generateAddress()
    }
  }


  @ApiOperation({ summary: 'Balance Full Node bitcoin Master' })
  @ApiResponse({ status: 201  })
  @Get('/balance')
  getBalanceDoge( ) {
    return this.bitCoinService.getBalance()
  }






}
