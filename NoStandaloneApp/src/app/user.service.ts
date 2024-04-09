import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:37000/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getUserPoints(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/points/${id}`);
  }
}