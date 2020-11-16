import {
  IHttpPostClient, IHttpPostClientParams
} from './make-http-post-client-protocols'

export const makeHttpPostClient = async (): Promise<any> => {
  class HttpClientStub implements IHttpPostClient {
    public url?: string

    public async post (params: IHttpPostClientParams): Promise<void> {
      const { url } = params

      this.url = url
    }
  }

  return new HttpClientStub()
}
