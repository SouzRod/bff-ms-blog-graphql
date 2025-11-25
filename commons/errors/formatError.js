import { STATUS_CODE } from '#enum';

export function formatError(_, error) {
  console.error(error);
  if (error.extensions.code) {
    return {
      statusCode: STATUS_CODE[error.extensions.code],
      message: error.message,
    };
  }
  return {
    statusCode: 500,
    message: 'Internal Server Error',
  };
}
