export class UnexpectedError extends Error {
  constructor () {
    super('Ação Inesperada')

    this.name = 'UnexpectedError'
  }
}
