export interface IHttpPostClientParams {
  url: string
}
export interface IHttpPostClient {
  url?: string
  post: (params: IHttpPostClientParams) => Promise<void>
}
