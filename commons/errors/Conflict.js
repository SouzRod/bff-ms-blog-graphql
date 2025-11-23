import { BaseError } from './BaseError.js';

export class Conflict extends BaseError {
  constructor(message) {
    super(409, message);
  }
}
