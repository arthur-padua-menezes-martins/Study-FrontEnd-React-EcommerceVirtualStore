import {
  IHttpResponse, IHttpResponseStatusCode,
  IHttpPostClient, IHttpPostClientParams
} from './mock-http-post-client-protocols'

export const mockHttpPostClient = async (): Promise<any> => {
  class HttpClientStub implements IHttpPostClient {
    public url?: string
    public body?: object
    public readonly response: IHttpResponse = {
      statusCode: IHttpResponseStatusCode.ok
    }

    public async post (params: IHttpPostClientParams): Promise<IHttpResponse> {
      const { url, body } = params

      this.url = url
      this.body = body

      return this.response
    }
  }

  return new HttpClientStub()
}
