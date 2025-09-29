import { UniqueEntityIDVO } from '../value-objects';

export class CryptoAsset {
  constructor(
    public readonly id: UniqueEntityIDVO,
    public readonly symbol: string,
    public readonly name: string,
  ) {}
}
