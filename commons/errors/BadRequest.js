import { BaseError } from './BaseError.js';

export class BadRequest extends BaseError {
  constructor(message) {
    super(400, message);
  }
}
