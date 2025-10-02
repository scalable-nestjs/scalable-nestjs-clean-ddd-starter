import { Body, Controller, Get } from '@nestjs/common';

import { CreateTradeOrderUseCase } from '@crypto-trading/application';

@Controller('trade-orders')
export class TradeOrdersController {
  constructor(private readonly createTradeOrderUseCase: CreateTradeOrderUseCase) {}

  @Get()
  async create(@Body() body: any): Promise<any> {
    return this.createTradeOrderUseCase.execute({
      clientId: 'string',
      assetId: '1',
      amount: 10,
      type: 'BUY' as any,
    });
  }
}
