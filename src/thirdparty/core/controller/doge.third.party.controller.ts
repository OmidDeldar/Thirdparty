import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { DogeCoinService } from "../../modules/dogecoin/service/doge.coin.service";




@ApiTags('Third-Party-Doge')
@ApiHeader({
  name: 'language-code',
  description: 'language code',
  schema: {
    default: 'FA'
  }
})
@Controller('third-party-doge')

export class DogeThirdPartyController {

  constructor( private dogeCoinService :DogeCoinService ) {

  }

  @ApiOperation({ summary: 'Create Generate Address Full Node Doge' })
  @ApiResponse({ status: 201  })
  @Get('/generate')
  createAddress() {
    return this.dogeCoinService.generateAddress()
  }

  
  @ApiOperation({ summary: 'Create N number Generate Address Full Node doge' })
  @ApiResponse({ status: 201  })
  @Get('/generate/:count')
  createAddressByCount(@Param('count') count: number) {
    for (let index = 0; index < count; index++) {
      return this.dogeCoinService.generateAddress()
    }
  }


  @ApiOperation({ summary: 'Balance Full Node Doge Master' })
  @ApiResponse({ status: 201  })
  @Get('/balance')
  getBalanceDoge( ) {
    return this.dogeCoinService.getBalance()
  }






}
