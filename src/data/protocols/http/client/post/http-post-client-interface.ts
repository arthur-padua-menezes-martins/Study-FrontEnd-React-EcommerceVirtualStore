export interface IHttpPostClientParams {
  url: string
  body?: object
}
export interface IHttpPostClient {
  url?: string
  body?: object

  post: (params: IHttpPostClientParams) => Promise<void>
}
