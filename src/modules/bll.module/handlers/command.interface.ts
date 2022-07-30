import { ICommandHandler as ICqrsCommandHandler } from '@nestjs/cqrs';

export interface ICommandHandler<TRequest> extends ICqrsCommandHandler<TRequest> {

}