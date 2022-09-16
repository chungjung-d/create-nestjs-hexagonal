export const httpStatus = {
  HTTP_STATUS_FORBIDDEN: 401,
};

export const httpError = {
  AUTH_VALIDATE_FAILED: {
    status: httpStatus.HTTP_STATUS_FORBIDDEN,
    message: 'auth validation failed',
  },
} as const;
