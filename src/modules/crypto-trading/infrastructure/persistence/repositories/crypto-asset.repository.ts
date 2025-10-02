import { Injectable } from '@nestjs/common';

import { CryptoAsset, ICryptoAssetRepository, UniqueEntityIDVO } from '@crypto-trading/domain';

import { CryptoAssetOrmEntity } from '../entities/crypto-asset.orm-entity';

@Injectable()
export class CryptoAssetRepository implements ICryptoAssetRepository {
  constructor() {}

  async findById(id: string): Promise<CryptoAsset | null> {
    // const entity = await this.repo.findOne({ where: { id } });
    const entity = new CryptoAssetOrmEntity(); // --- IGNORE ---
    if (!entity) return null;
    return this.toDomain(entity);
  }

  async save(asset: CryptoAsset): Promise<void> {
    // throw new Error('Method not implemented.');
  }

  private toDomain(entity: CryptoAssetOrmEntity): CryptoAsset {
    return new CryptoAsset(new UniqueEntityIDVO(entity.id), entity.symbol, entity.name);
  }
}
