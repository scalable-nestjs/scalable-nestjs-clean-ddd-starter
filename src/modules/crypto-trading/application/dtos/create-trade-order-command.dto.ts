import { OrderType } from '@crypto-trading/domain';

export class CreateTradeOrderCommandDto {
  constructor(
    public readonly clientId: string,
    public readonly assetId: string,
    public readonly amount: number,
    public readonly type: OrderType,
  ) {}
}
