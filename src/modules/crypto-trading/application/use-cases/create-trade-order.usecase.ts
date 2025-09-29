import { Inject } from '@nestjs/common';

import {
  CryptoAsset,
  ICryptoAssetRepository,
  ITradeOrderRepository,
  OrderType,
  TradeOrder,
} from '@crypto-trading/domain';

import { CreateTradeOrderCommandDto, CreateTradeOrderResultDto } from '../dtos';
import { ClientIdVO, CryptoAmountVO, UniqueEntityIDVO } from 'modules/crypto-trading/domain/value-objects';
import { AssetNotFoundError } from 'modules/crypto-trading/domain/exceptions';

export class CreateTradeOrderUseCase {
  constructor(
    @Inject(ITradeOrderRepository)
    private readonly tradeOrderRepository: ITradeOrderRepository,
    @Inject(ICryptoAssetRepository)
    private readonly cryptoAssetRepo: ICryptoAssetRepository,
  ) {}

  async execute(command: CreateTradeOrderCommandDto): Promise<CreateTradeOrderResultDto> {
    const clientId = new ClientIdVO(command.clientId);
    const amount = new CryptoAmountVO(command.amount);
    const type = command.type;

    const asset = await this.cryptoAssetRepo.findById(command.assetId);
    if (!asset) throw new AssetNotFoundError(command.assetId);

    const tradeOrder = this.createTradeOrder(clientId, amount, asset, type);

    await this.tradeOrderRepository.save(tradeOrder);

    return this.mapToDto(tradeOrder);
  }

  // ----------------------------
  // Command methods
  // ----------------------------
  private createTradeOrder(
    clientId: ClientIdVO,
    amount: CryptoAmountVO,
    asset: CryptoAsset,
    type: OrderType,
  ): TradeOrder {
    return TradeOrder.create({
      clientId,
      asset,
      amount,
      type,
    });
  }

  private mapToDto(tradeOrder: TradeOrder): CreateTradeOrderResultDto {
    const primitives = tradeOrder.toPrimitives();
    return new CreateTradeOrderResultDto(
      primitives.id,
      primitives.clientId,
      primitives.assetId,
      primitives.amount,
      primitives.type,
      primitives.status,
    );
  }
}
