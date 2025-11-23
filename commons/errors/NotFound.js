import { BaseError } from './BaseError.js';

export class NotFound extends BaseError {
  constructor(message) {
    super(404, message);
  }
}
