import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() public userChanged = new EventEmitter<any>();
  @Output() public arrayChanged = new EventEmitter<User[]>();
  @Output() public userAdded = new EventEmitter<User>();


  constructor() { }

  ngOnInit(): void {
    console.log("ciao");
  }

  changeUser(){
    this.userChanged.emit();
  }

  changeArray(){
    const newArray:User[] = [
      {name: "michael", ranking: 3},
      {name: "francesca", ranking: 1},
      {name: "nicolò", ranking: 2},
    ]
    this.arrayChanged.emit(newArray);
  }

  addUser(){
    const user:User = {name: "andrea a", ranking: 100};

    this.userAdded.emit(user);

  }

}
