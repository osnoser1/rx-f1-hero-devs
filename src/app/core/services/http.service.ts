import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../tokens';
import { QueryParamValue } from '../types';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  get<T>(
    path: string,
    options?: { params?: HttpParams | Record<string, QueryParamValue> },
  ) {
    return this.http.get<T>(`${this.apiUrl}${path}`, options);
  }
}
