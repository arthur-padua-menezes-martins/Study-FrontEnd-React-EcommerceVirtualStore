import {
  IHttpResponse
} from '../../export-all'

export interface IHttpPostClientParams<T> {
  url: string
  body?: T
}

export interface IHttpPostClient<T, R> {
  url?: string
  body?: T
  response: IHttpResponse<R>

  post: (params: IHttpPostClientParams<T>) => Promise<IHttpResponse<R>>
}
