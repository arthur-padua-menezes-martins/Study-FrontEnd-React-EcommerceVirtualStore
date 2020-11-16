import {
  IAuthentication,
  IHttpPostClient
} from './remote-authentication-protocols'
import {
  mockRemoteAuthentication,
  mockHttpPostClient,
  mockAuthentication
} from './remote-authentication-mock'
import {
  fakerURL
} from './remote-authentication-utils'

interface ISystemUnderTestTypes {
  systemUnderTest: IAuthentication
  httpPostClientStub: IHttpPostClient
}
const makeSystemUnderTest = async (url: string = fakerURL): Promise<ISystemUnderTestTypes> => {
  const httpPostClientStub = await mockHttpPostClient()
  const systemUnderTest = await mockRemoteAuthentication(url, httpPostClientStub)

  return {
    systemUnderTest,
    httpPostClientStub
  }
}

const httpRequest = {
  authenticationParams: mockAuthentication()
}

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    await systemUnderTest.auth(httpRequest.authenticationParams)

    expect(httpPostClientStub.url).toBe(fakerURL)
  })

  test('should call HttpClient with correct body', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    await systemUnderTest.auth(httpRequest.authenticationParams)

    expect(httpPostClientStub.body).toEqual(httpRequest.authenticationParams)
  })
})
