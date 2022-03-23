import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() public userChanged = new EventEmitter<any[]>();
  @Output() public arrayChanged = new EventEmitter<User[]>();
  @Output() public userAdded = new EventEmitter<User>();

  constructor() {}

  changeUser() {
    this.userChanged.emit();
  }

  changeArray() {
    const newArray = [
      { name: 'peppe', ranking: 2 },
      { name: 'peppino', ranking: 3 },
      { name: 'peppuzzo', ranking: 1 },
    ];
    this.arrayChanged.emit(newArray);
  }

  addUser() {
    const user: User = { name: 'sharquisha', ranking: 100 };
    this.userAdded.emit(user);
  }
}
