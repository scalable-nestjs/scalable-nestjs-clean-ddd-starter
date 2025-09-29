/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { DomainError } from '../exceptions';
import { v7 as uuid, validate as uuidValidate } from 'uuid';
export class UniqueEntityIDVO {
  private readonly value: string;

  constructor(id?: string) {
    if (id && !uuidValidate(id)) {
      throw new DomainError('Invalid UUID for entity ID');
    }
    this.value = id ?? uuid();
  }

  public getValue(): string {
    return this.value;
  }

  public equals(id?: UniqueEntityIDVO): boolean {
    if (!id) return false;
    return id.getValue() === this.value;
  }
}
