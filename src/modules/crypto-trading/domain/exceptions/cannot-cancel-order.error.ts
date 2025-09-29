import { DomainError } from './domain.error';

export class CannotCancelOrderError extends DomainError {
  constructor(orderId: string) {
    super(`Trade order with id ${orderId} cannot be cancelled`);
    this.name = 'CannotCancelOrderError';
  }
}
