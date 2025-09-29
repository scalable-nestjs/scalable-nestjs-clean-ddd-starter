import { DomainEvent } from '../events';
import { UniqueEntityIDVO } from '../value-objects';

export abstract class AggregateRoot<TProps = any> {
  protected _id: UniqueEntityIDVO;
  protected _props: TProps;
  private _events: DomainEvent[] = [];

  constructor(props: TProps, id?: UniqueEntityIDVO) {
    this._props = props;
    this._id = id ?? new UniqueEntityIDVO();
  }

  public get id(): UniqueEntityIDVO {
    return this._id;
  }

  protected addEvent(event: DomainEvent): void {
    this._events.push(event);
  }

  public pullEvents(): DomainEvent[] {
    const events = [...this._events];
    this._events = [];
    return events;
  }

  public get props(): TProps {
    return this._props;
  }
}
