import { HttpStatus, Injectable } from "@nestjs/common";
import { RpcClient, RpcClientOptions, RpcRequest } from "jsonrpc-ts";
import { MethodsRpc } from "src/common/rpc/methods.rpc";
import { GenerateAddressResult } from "../../../common/result/generate.address.result";

@Injectable()
export class DashService {
  PORT =parseInt(process.env.DASH_RPC_PORT)
  HOST=process.env.RPC_HOST
  rpcOptions : RpcClientOptions
  constructor() {
    this.rpcOptions = {
      auth: { username: "admin", password: "alimohseni1362" },
      headers: { "content-type": "text/plain;" },
      timeout: 60000,
      url: `http://${this.HOST}:${this.PORT}/wallet/Master`,
      method: "post"
    };
  }
  async generateAddress() : Promise<GenerateAddressResult> {
    const rpcRequest:RpcRequest<any>= {
      id:Math.floor(Math.random() * 99999 - 11111),
      jsonrpc:"2.0" ,
      method:MethodsRpc.GENERATE_ADDRESS_WALLET ,
      params:[]
    }
    const rpcClient=new RpcClient(this.rpcOptions)
    try {
      const sendRequest=await rpcClient.makeRequest(rpcRequest)
      if (sendRequest.status!=HttpStatus.OK) {

      }
      return { address : sendRequest.data.result , memo : null , public_key : sendRequest.data.result , private_key : null}
    } catch (e) {
      if (e.response.data.error.code == -12) {
        const rpcRequest:RpcRequest<any>= {
          id:Math.floor(Math.random() * 99999 - 11111),
          jsonrpc:"2.0" ,
          method:"walletpassphrase",
          params:["Abc12345678",60]
        }
        const rpcClient=new RpcClient(this.rpcOptions)
        const sendRequest=await rpcClient.makeRequest(rpcRequest)

        const rpcRequest2:RpcRequest<any>= {
          id:Math.floor(Math.random() * 99999 - 11111),
          jsonrpc:"2.0" ,
          method:"keypoolrefill",
          params:[]
        }
        const rpcClient2=new RpcClient(this.rpcOptions)
        const sendRequest2=await rpcClient.makeRequest(rpcRequest2)
        
      }
      throw e
    }
  }

  async getBalance() {
    const rpcRequest:RpcRequest<any>= {
      id:Math.floor(Math.random() * 99999 - 11111),
      jsonrpc:"2.0" ,
      method:MethodsRpc.GET_BALANCE ,
      params:[]
    }
    const rpcClient=new RpcClient(this.rpcOptions)
    try {
      const sendRequest=await rpcClient.makeRequest(rpcRequest)
      if (sendRequest.status!=HttpStatus.OK) {

      }
      return { amount : sendRequest.data.result}
    } catch (e) {
      throw e
    }
  }



}
