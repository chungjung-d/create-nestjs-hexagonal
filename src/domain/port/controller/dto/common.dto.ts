import { ResponseMessageType } from '../../../core/type/base-message-type/common-message.type';
import { IsString } from 'class-validator';

export class MessageResDTO implements ResponseMessageType {
  @IsString()
  message: string;
}
