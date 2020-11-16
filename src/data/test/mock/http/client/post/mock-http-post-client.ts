import {
  IHttpPostClient, IHttpPostClientParams
} from './mock-http-post-client-protocols'

export const mockHttpPostClient = async (): Promise<any> => {
  class HttpClientStub implements IHttpPostClient {
    public url?: string
    public body?: object

    public async post (params: IHttpPostClientParams): Promise<void> {
      const { url, body } = params

      this.url = url
      this.body = body
    }
  }

  return new HttpClientStub()
}
