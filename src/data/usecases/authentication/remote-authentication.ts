import {
  IHttpResponseStatusCode,
  IAuthenticationParams,
  IHttpPostClient,
  IAccountModel
} from './remote-authentication-protocols'
import {
  InvalidCredentialsError,
  UnexpectedError
} from './remote-authentication-errors'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient<IAuthenticationParams, IAccountModel>
  ) {}

  public async auth (params: IAuthenticationParams): Promise<IAccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case IHttpResponseStatusCode.ok: return httpResponse.body
      case IHttpResponseStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
