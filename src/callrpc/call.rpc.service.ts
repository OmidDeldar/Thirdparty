import { Injectable } from '@nestjs/common';
import {RpcClientOptions} from "jsonrpc-ts";

@Injectable()
export class CallRpcService {
    async getDogeRpcOptions():Promise<RpcClientOptions>
    {
        const HOST="localhost"
        const PORT=62100
        const dogeRpcOptions:RpcClientOptions=
            {
                auth:{username:"admin",password:"alimohseni1362"},
                headers:{"content-type": "text/plain;"},
                timeout:60000,
                url:`http://${HOST}:${PORT}`,
                method:"post"
            }

        return dogeRpcOptions
    }

    async walletOptions():Promise<WalletOptions>
    {
      const walletOptions:WalletOptions=
        {
          wallet_pass:"Elyas!123",
          target_wallet:"DHgAgxnLaeLr3uTMqPDcEca8ZHRFgSxciJ"
        }

        return walletOptions
    }
}

export class WalletOptions {
  wallet_pass:string
  target_wallet:string
}