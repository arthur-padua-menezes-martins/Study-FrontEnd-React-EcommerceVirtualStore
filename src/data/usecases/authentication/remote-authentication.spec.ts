import {
  IAuthentication,
  IHttpPostClient
} from './remote-authentication-protocols'
import {
  makeRemoteAuthentication,
  makeHttpPostClient
} from './remote-authentication-make'
import {
  url,
  informationsOfAuthentication
} from './remote-authentication-utils'

interface ISystemUnderTestTypes {
  systemUnderTest: IAuthentication
  httpPostClientStub: IHttpPostClient
}
const makeSystemUnderTest = async (url: string): Promise<ISystemUnderTestTypes> => {
  const httpPostClientStub = await makeHttpPostClient()
  const systemUnderTest = await makeRemoteAuthentication(url, httpPostClientStub)

  return {
    systemUnderTest,
    httpPostClientStub
  }
}

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest(url)

    await systemUnderTest.auth(informationsOfAuthentication.bodyMatch)

    expect(httpPostClientStub.url).toBe(url)
  })

  test('should call HttpClient with correct body', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest(url)

    await systemUnderTest.auth(informationsOfAuthentication.bodyMatch)

    expect(httpPostClientStub.url).toBe(url)
  })
})
