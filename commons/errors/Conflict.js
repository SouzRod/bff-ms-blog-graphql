import { BaseError } from './BaseError.js';
import { STATUS_CODE } from '#enum';

export class Conflict extends BaseError {
  constructor(message) {
    super(STATUS_CODE.CONFLICT, message);
  }
}
