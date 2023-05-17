import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import {
  ApiAcceptedResponse,
  ApiBearerAuth, ApiCreatedResponse,
  ApiHeader,
  ApiHeaders,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";

import { AuthGuard } from "@nestjs/passport";
import { TronService } from "../../modules/tron/service/tron.service";
import { GenerateAddressResult } from "../../common/result/generate.address.result";
import { BalanceResult } from "../../common/result/balance.result";
import { DecimalsResult } from "../../common/result/decimals.result";
import { TransferCoinDto } from "../../common/dtos/transfer.coin.dto";
import { NameResult } from "../../common/result/name.result";
import { TransferResult } from "../../common/result/transfer.result";
import { TransferTokenDto } from "../../common/dtos/transfer.token.dto";
import { CheckTransactionTrxResult } from "../../common/result/check.transaction.trx.result";
import { CheckTransactionTrc20Result } from "../../common/result/check.transaction.trc20.result";
import { TransferTrc20FromDto } from "../../common/dtos/transfer.trc20.from.dto";
import { ApproveTrc20Dto } from "../../common/dtos/approve.trc20.dto";


@ApiBearerAuth('access-token')
@ApiTags('ThirdParty - Tron')
@ApiHeaders([{
    name: 'language-code',
    description: 'language code',
    schema: {
      default: 'FA'
    }
  }]
)

@Controller('third-party/tron')
export class TronThirdPartyController {
  constructor(private tronService : TronService) {
  }

  @ApiOperation({ summary: 'create address Tron Network' })
  @ApiResponse({ status:201 , type : GenerateAddressResult })
  @Post('/address')
  generateAddress( ) {

    return this.tronService.generateAddress()
  }

  @ApiOperation({ summary: 'Create N number Generate Address Full Node tron' })
  @ApiResponse({ status: 201  })
  @Get('/generate/:count')
  createAddressByCount(@Param('count') count: number) {
    for (let index = 0; index < count; index++) {
      return this.tronService.generateAddress()
    }
  }

  @ApiOperation({ summary: 'Get Balance TRX' })
  @ApiResponse({ status:200 , type : BalanceResult })
  @Get('/trx/:address')
  getBalanceCoin( 
              @Param("address") address : string ) {
    return this.tronService.getBalanceCoin(address)
  }

  @ApiOperation({ summary: 'Get Balance TRC20' })
  @ApiResponse({ status:200 , type : BalanceResult })
  @Get('/trc20/balance/:address/:smart_contract')
  getBalanceTRC20( 
                   @Param("address") address : string ,
                   @Param("smart_contract") smart_contract : string ) {
    return this.tronService.getBalanceToken(address , smart_contract)
  }

  @ApiOperation({ summary: 'Get Decimals Token' })
  @ApiResponse({ status:200 , type : DecimalsResult })
  @Get('/trc20/decimals/:smart_contract')

  getDecimals(
               @Param("smart_contract") smart_contract : string ) {
    return this.tronService.getDecimalsToken(smart_contract)
  }

  @ApiOperation({ summary: 'Get Total Supply Token' })
  @ApiResponse({ status:200 , type : DecimalsResult })
  @Get('/trc20/supply/:smart_contract')

  getTotalSupply( 
               @Param("smart_contract") smart_contract : string ) {
    return this.tronService.getSupplyToken( smart_contract)
  }

  @ApiOperation({ summary: 'Get Name Token' })
  @ApiResponse({ status:200 , type : NameResult })
  @Get('/trc20/name/:smart_contract')

  getNameToken( 
                  @Param("smart_contract") smart_contract : string ) {
    return this.tronService.getNameToken( smart_contract)
  }

  @ApiOperation({ summary: 'Transfer TRX' })
  @ApiResponse({ status:201 , type : TransferResult })
  @Post('/trx/transfer')
  transferTRX( 
              @Body() transferCoinDto : TransferCoinDto ) {
    return this.tronService.transferCoin(transferCoinDto)
  }

  @ApiOperation({ summary: 'Transfer TRC20' })
  @ApiResponse({ status:201 , type : TransferResult })
  @Post('/trc20/ransfer')

  transferTRC20(
            @Body() transferTokenDto : TransferTokenDto ) {
    return this.tronService.transferToken(transferTokenDto)
  }

  @ApiOperation({ summary: 'Transfer From TRC20 ' })
  @ApiResponse({ status:201 , type : TransferResult })
  @Post('/trc20/transfer-from')
  transferFromTRC20(
                 @Body() transferTrc20FromDto : TransferTrc20FromDto ) {
    return this.tronService.transferFrom(transferTrc20FromDto)
  }

  @ApiOperation({ summary: 'Approve  TRC20 ' })
  @ApiResponse({ status:201 , type : TransferResult })
  @Post('/trc20/approve')
  approveTrc20(
                     @Body() transferTrc20FromDto : ApproveTrc20Dto ) {
    return this.tronService.approval(transferTrc20FromDto)
  }

  @ApiOperation({ summary: 'Check Transaction TRX' })
  @ApiResponse({ status:200 , type : CheckTransactionTrxResult })
  @Get('/trx/check/:tx_id')
  checkTransactionTRX(
               @Param('tx_id')  tx_id : string) {
    return this.tronService.checkCoinByHash(tx_id)
  }

  @ApiOperation({ summary: 'Check Transaction TRC20' })
  @ApiResponse({ status:200 , type : CheckTransactionTrc20Result })
  @Get('/trc20/check/:tx_id')
  checkTransactionTRC20(
                       @Param('tx_id')  tx_id : string) {
    return this.tronService.checkTokenByHash(tx_id)
  }
}
