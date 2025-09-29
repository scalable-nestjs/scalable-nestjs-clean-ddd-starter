import { DomainError } from './domain.error';

export class CannotExecuteOrderError extends DomainError {
  constructor(orderId: string) {
    super(`Trade order with id ${orderId} cannot be executed`);
    this.name = 'CannotExecuteOrderError';
  }
}
