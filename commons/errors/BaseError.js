import { CODE_TO_STATUS } from '#enum';
import { GraphQLError } from 'graphql';

export class BaseError extends GraphQLError {
  constructor(status, message) {
    super(message, {
      extensions: {
        code: CODE_TO_STATUS[status],
        http: { status: status }
      },
    });
  }
}
