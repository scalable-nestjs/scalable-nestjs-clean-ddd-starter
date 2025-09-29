import { DomainError } from '../exceptions';

export class ClientIdVO {
  constructor(public readonly value: string) {
    if (!value) throw new DomainError('ClientId cannot be empty');
  }

  public getValue(): string {
    return this.value;
  }
}
