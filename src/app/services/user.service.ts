import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = []
  constructor(private httpClient: HttpClient) { }


  async getUsers(user: String) {
    const response = await this.httpClient.get(`${environment.apiUrl}/search/users?q=${user}`).toPromise<any>()
    this.users = response.items.splice(0, 10);
    return this.users;
  }

  getUser(user: String | null) {
    return this.httpClient.get(`${environment.apiUrl}/users/${user}`)
  }
}
