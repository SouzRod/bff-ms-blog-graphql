import { BaseError } from './BaseError.js';
import { STATUS_TO_CODE } from '#enum';

export class Conflict extends BaseError {
  constructor(message) {
    super(STATUS_TO_CODE.CONFLICT, message);
  }
}
