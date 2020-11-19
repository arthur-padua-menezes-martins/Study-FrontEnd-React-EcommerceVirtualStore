import faker from 'faker'
import {
  IAccountModel
} from '../import-all'

interface IInformationsOfAccountTypes {
  token: {
    access: IAccountModel
  }
}
export const informationsOfAccount: IInformationsOfAccountTypes = {
  token: {
    access: {
      accessToken: faker.random.uuid()
    }
  }
}
