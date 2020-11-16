import {
  IAuthenticationParams
} from 'domain/usecases/authentication/interface-authentication'
import {
  informationsOfAuthentication
} from './mock-authentication-utils'

export const mockAuthentication = (): IAuthenticationParams => (
  informationsOfAuthentication.bodyMatch
)
