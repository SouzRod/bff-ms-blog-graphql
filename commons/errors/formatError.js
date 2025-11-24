import { STATUS_TO_CODE } from '#enum';

export function formatError(_, error) {
  if (error.extensions.code) {
    console.error(error);
    return {
      statusCode: STATUS_TO_CODE[error.extensions.code],
      message: error.message,
    };
  }
  console.error(error);
  return {
    statusCode: 500,
    message: 'Internal Server Error',
  };
}
