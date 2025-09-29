import { DomainError } from '../exceptions';

export class CryptoAmountVO {
  constructor(public readonly value: number) {
    if (value <= 0) throw new DomainError('Crypto amount must be positive');
  }
  public getValue(): number {
    return this.value;
  }
}
