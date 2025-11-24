import { BaseError } from './BaseError.js';
import { STATUS_TO_CODE } from '#enum';

export class NotFound extends BaseError {
  constructor(message) {
    super(STATUS_TO_CODE.NOT_FOUND, message);
  }
}
