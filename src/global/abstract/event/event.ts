import { IEvent } from '@nestjs/cqrs';

export const EventTypeEnum = {
  LOGGING: 'LOGGING',
  EMAIL: 'EMAIL',
  CACHE: 'CACHE',
  COMMAND: 'COMMAND',
  QUERY: 'QUERY',
};

export type EventType = typeof EventTypeEnum[keyof typeof EventTypeEnum];

export abstract class CustomEvent implements IEvent {
  protected constructor(readonly eventType: EventType) {}
}
