import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angularPipe';

  public listData: any = {};

  constructor(private http: HttpClient) {
    this.listData.background = 'lightgreen';
    this.listData.usersArray = this.users;
  }
  ngOnInit(): void {
    this.http.get<User[]>('./assets/users.json').subscribe((users) => {
      this.users = users;
      this.listData.usersArray = this.users;
    });
  }

  public users: User[] = [];

  onUserChanged() {
    this.users[0].name = 'peeeeee';
    this.listData.usersArray = this.users;
  }

  onUserAdded(user: User) {
    this.users.push(user);
    this.listData.usersArray = this.users;
  }

  onArrayChanged(usersArray: User[]) {
    this.users = usersArray;
    this.listData.usersArray = this.users; //you can spread this.users to make sure it's recreated, it can help if input breaks
  }
}
