import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user/user.model'; // Asegúrate de que la ruta es correcta
import { LoginResponse } from './login/login.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:37000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/user`, JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getUserPoints(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/points/${id}`);
  }

  login(user: UserModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/user/login`, JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}