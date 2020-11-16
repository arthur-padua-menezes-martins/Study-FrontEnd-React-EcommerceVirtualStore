import {
  IAuthentication, IAuthenticationParams,
  IHttpPostClient
} from './make-remote-authentication-protocols'
import {
  IAccountModel
} from '../../make-protocols'

export const makeRemoteAuthentication = async (url: string, httpPostClient: IHttpPostClient): Promise<IAuthentication> => {
  class RemoteAuthenticationStub implements IAuthentication {
    constructor (
      private readonly url: string,
      private readonly httpPostClient: IHttpPostClient
    ) {}

    public async auth (params?: IAuthenticationParams): Promise<IAccountModel> {
      await this.httpPostClient.post({
        url: this.url
      })

      return {
        accessToken: ''
      }
    }
  }

  return new RemoteAuthenticationStub(url, httpPostClient)
}
