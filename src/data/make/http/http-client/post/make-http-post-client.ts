import {
  IHttpPostClient
} from './make-http-post-client-protocols'

export const makeHttpPostClient = async (): Promise<any> => {
  class HttpClientStub implements IHttpPostClient {
    public url?: string

    public async post (url: string): Promise<void> {
      this.url = url
    }
  }

  return new HttpClientStub()
}
