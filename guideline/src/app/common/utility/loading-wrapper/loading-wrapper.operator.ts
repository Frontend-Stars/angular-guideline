import { BehaviorSubject, Observable } from 'rxjs';


export const loadingWrapper = <T>(loading: BehaviorSubject<boolean>): ((source: Observable<T>) => Observable<T>) => {
  return (source: Observable<T>): Observable<T> => {
    return new Observable(subscriber => {
      loading.next(true);

      source.subscribe({
        next(value): void {
          loading.next(false);
          subscriber.next(value);
        },
        error(error): void {
          loading.next(false);
          subscriber.error(error);
        },
        complete(): void {
          loading.next(false);
          subscriber.complete();
        }
      });
    });
  };
};
