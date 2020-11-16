export interface IHttpPostClient {
  url?: string
  post: (url: string) => Promise<void>
}
