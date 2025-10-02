import { Module } from '@nestjs/common';

import { CryptoTradingInfrastructureModule } from '@crypto-trading/infrastructure';

import { AppController } from './app.controller';

@Module({
  imports: [CryptoTradingInfrastructureModule],
  controllers: [AppController],
  providers: [],
})
export class ApiModule {}
