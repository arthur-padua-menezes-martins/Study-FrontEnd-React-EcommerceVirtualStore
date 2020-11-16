interface IInformationsOfAuthentication {
  bodyFields: string[]
  bodyPersonalFields: string[]
  bodyAddressFields: string[]
  bodyMatch: any
}

export const informationsOfAuthentication: IInformationsOfAuthentication = {
  bodyFields: ['name', 'email', 'password', 'passwordConfirmation', 'cpf', 'cep', 'street', 'number', 'neighborhood', 'city', 'state'],
  bodyPersonalFields: ['name', 'email', 'password', 'passwordConfirmation'],
  bodyAddressFields: ['cpf', 'cep', 'street', 'number', 'neighborhood', 'city', 'state'],

  bodyMatch: {
    personal: {
      name: 'name lastName',
      email: 'arthur.software.developer@gmail.com',
      password: 'password123',
      passwordConfirmation: 'password123',
      cpf: '624.804.443-09'
    },
    address: {
      cep: '60741-025',
      street: 'Rua Dr. Justa Araújo',
      number: '185',
      neighborhood: 'Serrinha',
      city: 'Fortaleza',
      state: 'CE'
    }
  }
}
