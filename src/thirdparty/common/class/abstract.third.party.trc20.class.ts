import { CheckTransactionTrc20Result } from "../result/check.transaction.trc20.result";
import { TransferTrc20FromDto } from "../dtos/transfer.trc20.from.dto";
import { TransferResult } from "../result/transfer.result";
import { ApproveTrc20Dto } from "../dtos/approve.trc20.dto";

export abstract class AbstractThirdPartyTrc20Class  {

  protected constructor() {

  }

  abstract  transferFrom(transferTrc20FromDto : TransferTrc20FromDto) : Promise<TransferResult>
  abstract  approval(approveTrc20Dto : ApproveTrc20Dto) : Promise<TransferResult>





}