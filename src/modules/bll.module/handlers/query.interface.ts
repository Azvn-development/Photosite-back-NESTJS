import { IQueryHandler as ICqrsQueryHandler } from "@nestjs/cqrs";

export interface IQueryHandler<TRequest, TResponse> extends ICqrsQueryHandler<TRequest, TResponse> {
}