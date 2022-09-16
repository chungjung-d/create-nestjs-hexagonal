import { CustomEvent, EventTypeEnum } from '@global/abstract/event/event';

export class EmailEvent extends CustomEvent {
  constructor() {
    super(EventTypeEnum.EMAIL);
  }
}
