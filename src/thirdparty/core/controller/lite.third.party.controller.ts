import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { LiteCoinService } from "../../modules/litecoin/service/lite.coin.service";




@ApiTags('Third-Party-Lite')
@ApiHeader({
  name: 'language-code',
  description: 'language code',
  schema: {
    default: 'FA'
  }
})
@Controller('third-party-lite')

export class LiteThirdPartyController {

  constructor( private liteCoinService :LiteCoinService ) {

  }

  @ApiOperation({ summary: 'Create Generate Address Full Node Lite' })
  @ApiResponse({ status: 201  })
  @Get('/generate')
  createAddress() {
    return this.liteCoinService.generateAddress()
  }

  @ApiOperation({ summary: 'Create N number Generate Address Full Node lite' })
  @ApiResponse({ status: 201  })
  @Get('/generate/:count')
  createAddressByCount(@Param('count') count: number) {
    for (let index = 0; index < count; index++) {
      return this.liteCoinService.generateAddress()
    }
  }


  @ApiOperation({ summary: 'Balance Full Node Lite Master' })
  @ApiResponse({ status: 201  })
  @Get('/balance')
  getBalanceDoge( ) {
    return this.liteCoinService.getBalance()
  }






}
