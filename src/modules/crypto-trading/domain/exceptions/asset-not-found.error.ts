import { DomainError } from './domain.error';

export class AssetNotFoundError extends DomainError {
  constructor(assetId: string) {
    super(`CryptoAsset with ID ${assetId} not found`);
    this.name = 'AssetNotFoundError';
  }
}
