import { MutationObserverBaseResult, QueryObserverBaseResult, UseMutateFunction } from '@tanstack/react-query';

export type HTTPMutationMethods = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type GenericQueryResponse = Partial<QueryObserverBaseResult>;
export type GenericMutationResponse<T> = Partial<MutationObserverBaseResult<unknown, unknown, T>>;
export type MutationFunction<T> = UseMutateFunction<Response, Error, T, unknown>;

export interface FetchState {
  isLoading?: boolean;
  isError?: boolean;
}
