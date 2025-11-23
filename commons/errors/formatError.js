import { STATUS_TO_CODE } from "#enum";

export function formatError(_, error) {
  console.error(error);
  return {
    statusCode: STATUS_TO_CODE[error.extensions.code],
    message: error.message,
  };
}
