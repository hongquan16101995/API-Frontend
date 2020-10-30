import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../user/user';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(API_URL + '/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(API_URL + '/users/' + id)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/users', user);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(API_URL + '/users', user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(API_URL + '/users/' + id);
  }
}
