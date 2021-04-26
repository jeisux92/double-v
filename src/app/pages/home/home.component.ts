import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }


  async onSearch(user: String) {
    const result = await this.userService.getUsers(user);
    this.users = result;
  }
}
