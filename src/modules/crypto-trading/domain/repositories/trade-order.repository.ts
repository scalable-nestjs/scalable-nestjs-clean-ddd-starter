import { TradeOrder } from '../entities';

export const ITradeOrderRepository = Symbol('ITradeOrderRepository');
export interface ITradeOrderRepository {
  save(order: TradeOrder): Promise<void>;
  findById(id: string): Promise<TradeOrder | null>;
}
