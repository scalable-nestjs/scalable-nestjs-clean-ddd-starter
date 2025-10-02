import { AggregateRoot } from './aggregate-root';
import { CryptoAsset } from './crypto-asset.entity';
import { OrderStatus, OrderType } from '../enums';
import { TradeOrderCancelledEvent, TradeOrderCreatedEvent, TradeOrderExecutedEvent } from '../events';
import { CannotCancelOrderError, CannotExecuteOrderError } from '../exceptions';
import { ClientIdVO, CryptoAmountVO, UniqueEntityIDVO } from '../value-objects';

export type TradeOrderProps = {
  clientId: ClientIdVO;
  asset: CryptoAsset;
  amount: CryptoAmountVO;
  type: OrderType;
  status: OrderStatus;
};

export class TradeOrder extends AggregateRoot<TradeOrderProps> {
  // ----------------------------
  // Constructor (private)
  // ----------------------------
  private constructor(props: TradeOrderProps, id?: UniqueEntityIDVO) {
    super(props, id);
  }

  // ----------------------------
  // Factories
  // ----------------------------
  /**
   * Create a new aggregate -> triggers events
   */
  public static create(props: Omit<TradeOrderProps, 'status'>): TradeOrder {
    const order = new TradeOrder({ ...props, status: OrderStatus.PENDING });
    order.addEvent(new TradeOrderCreatedEvent(order));
    return order;
  }

  /**
   * Rehydrate from existing data -> does not trigger events
   */
  public static rebuild(props: TradeOrderProps, id: string): TradeOrder {
    return new TradeOrder(props, new UniqueEntityIDVO(id));
  }

  // ----------------------------
  // State check helpers
  // ----------------------------
  public isPending(): boolean {
    return this._props.status === OrderStatus.PENDING;
  }

  public isExecuted(): boolean {
    return this._props.status === OrderStatus.EXECUTED;
  }

  public isCancelled(): boolean {
    return this._props.status === OrderStatus.CANCELLED;
  }

  // ----------------------------
  // Domain behaviors / actions
  // ----------------------------
  public execute() {
    if (!this.isPending()) {
      throw new CannotExecuteOrderError(this.id.getValue());
    }
    this._props.status = OrderStatus.EXECUTED;
    this.addEvent(new TradeOrderExecutedEvent(this));
  }

  public cancel() {
    if (!this.isPending()) {
      throw new CannotCancelOrderError(this.id.getValue());
    }
    this._props.status = OrderStatus.CANCELLED;
    this.addEvent(new TradeOrderCancelledEvent(this));
  }

  // ----------------------------
  // Expose values for mapping / serialization
  // ----------------------------
  public toPrimitives() {
    return {
      id: this.id.getValue(),
      clientId: this._props.clientId.getValue(),
      assetId: this._props.asset.id.getValue(),
      amount: this._props.amount.getValue(),
      type: this._props.type,
      status: this._props.status,
    };
  }
}
