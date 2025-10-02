import { Module } from '@nestjs/common';

import { CryptoTradingInfrastructureModule } from '@crypto-trading/infrastructure';
import { CreateTradeOrderUseCase } from '@crypto-trading/application';

import { TradeOrdersController } from './controllers';

@Module({
  imports: [CryptoTradingInfrastructureModule],
  controllers: [TradeOrdersController],
  providers: [CreateTradeOrderUseCase],
})
export class ApiModule {}
