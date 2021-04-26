import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsers(user: String) {
    return this.httpClient.get(`${environment.apiUrl}/search/users?q=${user}`).toPromise<any>()
  }

  getUser(user: String | null) {
    return this.httpClient.get(`${environment.apiUrl}/users/${user}`)
  }
}
