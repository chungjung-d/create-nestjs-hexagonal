import { CustomEvent, EventTypeEnum } from '@global/abstract/event/event';

export class CacheEvent extends CustomEvent {
  constructor() {
    super(EventTypeEnum.CACHE);
  }
}
