import { STATUS_CODES } from 'node:http';

const SUCCESS = Object.freeze({
  CREATE_ARTICLE: 'Article created successfully',
  UPDATE_ARTICLE: 'Article updated successfully',
  DELETE_ARTICLE: 'Article deleted successfully',
  CREATE_AUTHOR: 'Author registered successfully',
  UPDATE_AUTHOR: 'Author updated successfully',
  DELETE_AUTHOR: 'Author deleted successfully',
});

const ERROR = Object.freeze({
  ARTICLE_NOT_FOUND: 'Article not found',
  AUTHOR_NOT_FOUND: 'Author not found',
  ARTICLE_ALREADY_EXISTS: 'You already have an article with this title',
  AUTHOR_ALREADY_EXISTS: 'Author already exists',
});

const codeToStatus = Object.fromEntries(
  Object.entries(STATUS_CODES).map(([code, message]) => [Number(code), message.toUpperCase().replace(/\s+/g, '_')]),
);

const statusToCode = Object.fromEntries([
  ...Object.entries(STATUS_CODES).map(([code, message]) => [message.toUpperCase().replace(/\s+/g, '_'), Number(code)]),
  ['GRAPHQL_PARSE_FAILED', 500],
  ['GRAPHQL_VALIDATION_FAILED', 500],
  ['BAD_USER_INPUT', 400],
  ['PERSISTED_QUERY_NOT_FOUND', 404],
  ['PERSISTED_QUERY_NOT_SUPPORTED', 400],
  ['OPERATION_RESOLUTION_FAILURE', 500],
]);

export const RESPONSE_MESSAGE = Object.freeze({
  SUCCESS,
  ERROR,
});

export const CODE_TO_STATUS = Object.freeze(codeToStatus);
export const STATUS_TO_CODE = Object.freeze(statusToCode);
