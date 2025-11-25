import { BaseError } from './BaseError.js';
import { STATUS_CODE } from '#enum';

export class NotFound extends BaseError {
  constructor(message) {
    super(STATUS_CODE.NOT_FOUND, message);
  }
}
