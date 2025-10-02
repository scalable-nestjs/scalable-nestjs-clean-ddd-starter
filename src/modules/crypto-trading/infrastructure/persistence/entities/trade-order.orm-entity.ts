import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { CryptoAssetOrmEntity } from './crypto-asset.orm-entity';

@Entity('trade_orders')
export class TradeOrderOrmEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  clientId: string;

  @Column('uuid')
  assetId: string;

  @ManyToOne(() => CryptoAssetOrmEntity, { eager: true })
  @JoinColumn({ name: 'assetId' })
  asset: CryptoAssetOrmEntity;

  @Column('decimal', { precision: 18, scale: 8 })
  amount: number;

  @Column('varchar')
  type: string;

  @Column('varchar')
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
