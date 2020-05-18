import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HotelApiService {
  url = 'https://vserve-api.valet2you.in/api/v1/ird/guest/';

  constructor(private http: HttpClient) {}

  getMenus(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<any>(this.url + 'menu/' + id, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }

  placeOrder(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    return this.http.post<any>(this.url + 'order/', data, {
      observe: 'response',
      responseType: 'json',
      headers,
    });
  }
}
