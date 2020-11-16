import {
  IAuthentication, IAuthenticationParams,
  IHttpPostClient,
  IAccountModel
} from './remote-authentication-protocols'

export class RemoteAuthentication implements IAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  public async auth (params: IAuthenticationParams): Promise<IAccountModel> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    return {
      accessToken: ''
    }
  }
}
