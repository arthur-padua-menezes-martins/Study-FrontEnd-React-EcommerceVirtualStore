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
const makeSystemUnderTest = async (): Promise<ISystemUnderTestTypes> => {
  const httpPostClientStub = await makeHttpPostClient()
  const systemUnderTest = await makeRemoteAuthentication(url, httpPostClientStub)

  return {
    systemUnderTest,
    httpPostClientStub
  }
}

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const { systemUnderTest, httpPostClientStub } = await makeSystemUnderTest()

    await systemUnderTest.auth(informationsOfAuthentication.bodyMatch)

    expect(httpPostClientStub.url).toBe(url)
  })
})
