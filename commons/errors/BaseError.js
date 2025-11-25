import { STATUS_MESSAGE } from '#enum';
import { GraphQLError } from 'graphql';

export class BaseError extends GraphQLError {
  constructor(status, message) {
    super(message, {
      extensions: {
        code: STATUS_MESSAGE[status],
        http: { status: status }
      },
    });
  }
}
