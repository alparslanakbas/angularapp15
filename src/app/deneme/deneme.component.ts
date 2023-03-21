import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {

  count:number=1;
  names:string[]=["Alparslan","Akbaş"];
  userList:User[]=[];
  isShow=true;
  constructor() {
    this.userList.push(new User(1,"Alparslan","alparslan@gmail.com")) // Belirtilen dataları çek.
    this.userList.push(new User(2,"Ahmet","ahmet@gmail.com"))
    this.userList.push(new User(3,"Mehmet","mehmet@gmail.com"))
   }

  ngOnInit() {
  }

  numberCountUp():void{
    this.count++;
    console.log(this.count);
  }

  numberCountDown():void{
    this.count--;
  }

  showDenemeClose():void{
    this.isShow=false;
  }

  showDenemeOpen():void{
    this.isShow=true;
  }


}
