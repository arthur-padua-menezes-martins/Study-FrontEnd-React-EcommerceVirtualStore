import {
  IAuthentication, IAuthenticationParams,
  IHttpPostClient
} from './mock-remote-authentication-protocols'
import {
  IAccountModel
} from '../../mock-protocols'

export const mockRemoteAuthentication = async (url: string, httpPostClient: IHttpPostClient): Promise<IAuthentication> => {
  class RemoteAuthenticationStub implements IAuthentication {
    constructor (
      private readonly url: string,
      private readonly httpPostClient: IHttpPostClient
    ) {}

    public async auth (params?: IAuthenticationParams): Promise<IAccountModel> {
      await this.httpPostClient.post({
        url: this.url,
        body: params
      })

      return {
        accessToken: ''
      }
    }
  }

  return new RemoteAuthenticationStub(url, httpPostClient)
}
