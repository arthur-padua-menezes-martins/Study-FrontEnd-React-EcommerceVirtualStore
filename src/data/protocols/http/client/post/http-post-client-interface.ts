import {
  IHttpResponse
} from '../../export-all'

export interface IHttpPostClientParams {
  url: string
  body?: object
}

export interface IHttpPostClient {
  url?: string
  body?: object
  response: IHttpResponse

  post: (params: IHttpPostClientParams) => Promise<IHttpResponse>
}
