import { CryptoAsset } from '../entities';

export const ICryptoAssetRepository = Symbol('ICryptoAssetRepository');
export interface ICryptoAssetRepository {
  save(asset: CryptoAsset): Promise<void>;
  findById(id: string): Promise<CryptoAsset | null>;
}
