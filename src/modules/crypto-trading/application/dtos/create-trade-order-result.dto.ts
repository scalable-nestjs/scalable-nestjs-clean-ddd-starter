import { OrderStatus, OrderType } from '@crypto-trading/domain';

export class CreateTradeOrderResultDto {
  constructor(
    public readonly orderId: string,
    public readonly clientId: string,
    public readonly assetId: string,
    public readonly amount: number,
    public readonly type: string,
    public readonly status: string,
  ) {}
}
