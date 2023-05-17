import { HttpStatus, Injectable } from "@nestjs/common";
import { RpcClient, RpcClientOptions, RpcRequest } from "jsonrpc-ts";
import { MethodsRpc } from "src/common/rpc/methods.rpc";

import { GenerateAddressResult } from "../../../common/result/generate.address.result";

@Injectable()
export class BitCoinCashService {
  PORT =parseInt(process.env.BCH_RPC_PORT)
  HOST=process.env.RPC_HOST
  rpcOptions : RpcClientOptions
  constructor() {
    this.rpcOptions = {
      auth: { username: "admin", password: "alimohseni1362" },
      headers: { "content-type": "text/plain;" },
      timeout: 60000,
      url: `http://${this.HOST}:${this.PORT}`,
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
