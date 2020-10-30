import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../group/group';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Group[]>{
    return this.http.get<Group[]>(API_URL + '/groups');
  }

  createGroup(group: Group): Observable<Group> {
    return this.http.post<Group>(API_URL + '/groups', group);
  }

  editGroup(group: Group): Observable<Group> {
    return this.http.put<Group>(API_URL + '/groups/' + group.id, group);
  }

  deleteGroup(id: number): Observable<Group> {
    return this.http.delete<Group>(API_URL + '/groups/' + id);
  }
}
