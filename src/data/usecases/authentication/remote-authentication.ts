import {
  IHttpResponseStatusCode,
  IAuthenticationParams,
  IHttpPostClient
} from './remote-authentication-protocols'
import {
  InvalidCredentialsError,
  UnexpectedError
} from './remote-authentication-errors'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  public async auth (params: IAuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case IHttpResponseStatusCode.ok: break
      case IHttpResponseStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
