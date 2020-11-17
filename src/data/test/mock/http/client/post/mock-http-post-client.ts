import {
  IHttpResponse, IHttpResponseStatusCode,
  IHttpPostClient, IHttpPostClientParams
} from './mock-http-post-client-protocols'

export const mockHttpPostClient = async (): Promise<any> => {
  class HttpClientStub<T, R> implements IHttpPostClient<T, R> {
    public url?: string
    public body?: T
    public readonly response: IHttpResponse<R> = {
      statusCode: IHttpResponseStatusCode.ok
    }

    public async post (params: IHttpPostClientParams<T>): Promise<IHttpResponse<R>> {
      const { url, body } = params

      this.url = url
      this.body = body

      return this.response
    }
  }

  return new HttpClientStub()
}
