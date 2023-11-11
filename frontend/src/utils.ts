import { ApiError } from './types/ApiError';

export const getError = (err: ApiError) =>
  err.response && err.response.data.message
    ? err.response.data.message
    : err.message;
