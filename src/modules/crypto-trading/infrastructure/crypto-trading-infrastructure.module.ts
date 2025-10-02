import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ICryptoAssetRepository, ITradeOrderRepository } from '@crypto-trading/domain';

import { CryptoAssetOrmEntity, CryptoAssetRepository, TradeOrderOrmEntity, TradeOrderRepository } from './persistence';

@Module({
//   imports: [TypeOrmModule.forFeature([TradeOrderOrmEntity, CryptoAssetOrmEntity])],
  providers: [
    {
      provide: ITradeOrderRepository,
      useClass: TradeOrderRepository,
    },
    {
      provide: ICryptoAssetRepository,
      useClass: CryptoAssetRepository,
    },
  ],
  exports: [ITradeOrderRepository, ICryptoAssetRepository],
})
export class CryptoTradingInfrastructureModule {}
