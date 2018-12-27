import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GlobalService {
  private baseUrl = `${environment.api}/api/v1`;

  constructor(
    private http: HttpClient
  ) { }

  prepareHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    const data = {
      'Accept': 'application/json'
    };

    if (token) {
      data['x-access-token'] = token;
    }

    return new HttpHeaders(data);
  }

  prepareOptions(params: HttpParams) {
    return {
      headers: this.prepareHeaders(),
      params
    };
  }

  getRequest(url: string, params?: HttpParams): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`, this.prepareOptions(params));
  }

  postRequest(url: string, body, params?: HttpParams): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, body, this.prepareOptions(params));
  }

  deleteRequest(url: string, params?: HttpParams): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`, this.prepareOptions(params));
  }

  putRequest(url: string, body, params?: HttpParams): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, body, this.prepareOptions(params));
  }
}
