export class UnexpectedError extends Error {
  constructor () {
    super('ação inesperada')

    this.name = 'UnexpectedError'
  }
}
