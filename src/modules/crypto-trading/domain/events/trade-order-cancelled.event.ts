import { TradeOrder } from '../entities';
import { DomainEvent } from './domain.event';

export class TradeOrderCancelledEvent extends DomainEvent {
  constructor(
    public readonly tradeOrder: TradeOrder,
    public readonly occurredAt: Date = new Date(),
  ) {
    super();
  }
}
