import { BaseError } from './BaseError.js';
import { STATUS_TO_CODE } from '#enum';

export class InternalServerError extends BaseError {
  constructor(message) {
    super(STATUS_TO_CODE.INTERNAL_SERVER_ERROR, message);
  }
}
