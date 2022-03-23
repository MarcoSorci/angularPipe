import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() public userList?: User[];
  @Input() public listBackgroundColor: string = 'lightblue';

  constructor() {}

  ngOnInit(): void {
    console.log('hello');
  }

  capitalizeFirst(word:string):string{
    const firstChar = word[0].toUpperCase();
    const remainingChars = word.slice(1)
    return firstChar + remainingChars
  }
}
