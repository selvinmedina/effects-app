import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=100`);
  }

  getUsersById(id: string) {
    return this.http.get(`${this.url}/users/${id}`);
  }
}
