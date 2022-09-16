import { HttpException } from '@nestjs/common';
import { httpError } from '@global/constant/error.constant';

export type HttpErrorType = typeof httpError[keyof typeof httpError];

export class HttpError extends HttpException {
  constructor(httpError: HttpErrorType) {
    super(httpError.message, httpError.status);
  }
}
