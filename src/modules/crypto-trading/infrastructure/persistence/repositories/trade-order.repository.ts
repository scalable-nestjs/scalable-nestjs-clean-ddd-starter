import { Injectable } from '@nestjs/common';

import {
  TradeOrder,
  ITradeOrderRepository,
  ClientIdVO,
  CryptoAsset,
  UniqueEntityIDVO,
  CryptoAmountVO,
  OrderType,
  OrderStatus,
} from '@crypto-trading/domain';

import { TradeOrderOrmEntity } from '../entities/trade-order.orm-entity';

@Injectable()
export class TradeOrderRepository implements ITradeOrderRepository {
  constructor() {}

  async save(tradeOrder: TradeOrder): Promise<void> {
    const entity = this.toOrmEntity(tradeOrder);
    // await this.repository.save(entity);
  }

  async findById(id: string): Promise<TradeOrder | null> {
    // const entity = await this.repository.findOne({ where: { id }, relations: ['asset'] });
    const entity = new TradeOrderOrmEntity(); // --- IGNORE ---
    if (!entity) return null;
    return this.toDomain(entity);
  }

  private toOrmEntity(tradeOrder: TradeOrder): TradeOrderOrmEntity {
    const primitives = tradeOrder.toPrimitives();
    const entity = new TradeOrderOrmEntity();
    entity.id = primitives.id;
    entity.clientId = primitives.clientId;
    entity.amount = primitives.amount;
    entity.type = primitives.type;
    entity.status = primitives.status;
    entity.asset.id = primitives.assetId;
    return entity;
  }

  private toDomain(entity: TradeOrderOrmEntity): TradeOrder {
    return TradeOrder.rebuild(
      {
        clientId: new ClientIdVO(entity.clientId),
        asset: new CryptoAsset(new UniqueEntityIDVO(entity.asset.id), entity.asset.symbol, entity.asset.name),
        amount: new CryptoAmountVO(entity.amount),
        type: entity.type as OrderType,
        status: entity.status as OrderStatus,
      },
      entity.id,
    );
  }
}
