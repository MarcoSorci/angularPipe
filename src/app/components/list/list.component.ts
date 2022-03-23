import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public userList?:User[]
  @Input() public listBackgroundColor:string = "tomato"

  constructor() { }



  ngOnInit(): void {
    console.log("ciao")
  }

  capitalizeFirst(word: string): string{
    console.log("pippo");
    
    const firstChar = word[0];
    const upperFirst = firstChar.toUpperCase();
    const remainingChars = word.slice(1);
    return upperFirst + remainingChars;
  }



}


