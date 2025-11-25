import { BaseError } from './BaseError.js';
import { STATUS_CODE } from '#enum';

export class InternalServerError extends BaseError {
  constructor(message) {
    super(STATUS_CODE.INTERNAL_SERVER_ERROR, message);
  }
}
