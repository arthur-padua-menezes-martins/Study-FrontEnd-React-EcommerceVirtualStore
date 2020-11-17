import {
  RemoteAuthentication
} from './remote-authentication'
import {
  IHttpResponseStatusCode,
  IHttpPostClient
} from './remote-authentication-protocols'
import {
  mockHttpPostClient,
  mockAuthentication
} from './remote-authentication-mock'
import {
  InvalidCredentialsError,
  UnexpectedError
} from './remote-authentication-errors'
import {
  fakerURL
} from './remote-authentication-utils'

interface ISystemUnderTestTypes {
  systemUnderTest: RemoteAuthentication
  httpPostClientStub: IHttpPostClient
}
const makeSystemUnderTest = async (url: string = fakerURL): Promise<ISystemUnderTestTypes> => {
  const httpPostClientStub = await mockHttpPostClient()
  const systemUnderTest = new RemoteAuthentication(url, httpPostClientStub)

  return {
    systemUnderTest,
    httpPostClientStub
  }
}

const httpRequest = {
  authenticationParams: mockAuthentication()
}

describe('RemoteAuthentication', () => {
  test('should throw InvalidCredentialsError if HttpPostClient return statusCode 401 <version: 0.0.1>', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    httpPostClientStub.response = {
      statusCode: IHttpResponseStatusCode.unauthorized
    }
    const auth = systemUnderTest.auth(httpRequest.authenticationParams)

    await expect(auth).rejects.toThrow(new InvalidCredentialsError())
  })

  test('should throw UnexpectedError if HttpPostClient return statusCode 400 <version: 0.0.1>', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    httpPostClientStub.response = {
      statusCode: IHttpResponseStatusCode.badRequest
    }
    const auth = systemUnderTest.auth(httpRequest.authenticationParams)

    await expect(auth).rejects.toThrow(new UnexpectedError())
  })

  test('should throw UnexpectedError if HttpPostClient return statusCode 404 <version: 0.0.1>', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    httpPostClientStub.response = {
      statusCode: IHttpResponseStatusCode.notFound
    }
    const auth = systemUnderTest.auth(httpRequest.authenticationParams)

    await expect(auth).rejects.toThrow(new UnexpectedError())
  })

  test('should throw UnexpectedError if HttpPostClient return statusCode 500 <version: 0.0.1>', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    httpPostClientStub.response = {
      statusCode: IHttpResponseStatusCode.serverError
    }
    const auth = systemUnderTest.auth(httpRequest.authenticationParams)

    await expect(auth).rejects.toThrow(new UnexpectedError())
  })

  test('should call HttpClient with correct URL <version: 0.0.1>', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    await systemUnderTest.auth(httpRequest.authenticationParams)

    expect(httpPostClientStub.url).toBe(fakerURL)
  })

  test('should call HttpClient with correct body <version: 0.0.1>', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    await systemUnderTest.auth(httpRequest.authenticationParams)

    expect(httpPostClientStub.body).toEqual(httpRequest.authenticationParams)
  })
})
