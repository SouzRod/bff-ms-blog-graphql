import { BaseError } from './BaseError.js';
import { STATUS_CODE } from '#enum';

export class BadRequest extends BaseError {
  constructor(message) {
    super(STATUS_CODE.BAD_REQUEST, message);
  }
}
