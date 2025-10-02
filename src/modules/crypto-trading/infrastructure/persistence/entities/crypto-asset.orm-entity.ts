import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TradeOrderOrmEntity } from './trade-order.orm-entity';

@Entity('crypto_assets')
export class CryptoAssetOrmEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  symbol: string;

  @Column('varchar')
  name: string;

  @OneToMany(() => TradeOrderOrmEntity, (order) => order.asset)
  orders: TradeOrderOrmEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
