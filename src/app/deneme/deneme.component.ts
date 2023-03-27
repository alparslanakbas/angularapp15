import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
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
  person1:Person={firstName:"Alparslan", lastName:"Akbaş",age:24}

  loginModel:loginModel;
  constructor() {
    this.userList.push(new User(1,"Alparslan","alparslan@gmail.com")) // Belirtilen dataları çek.
    this.userList.push(new User(2,"Ahmet","ahmet@gmail.com"))
    this.userList.push(new User(3,"Mehmet","mehmet@gmail.com"))

    this.loginModel={userName:"",password:"",rememberMe:false}
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

  save(form:NgForm){
    console.log(form.value)
  }
}

interface Person
{
  firstName:string,
  lastName:string,
  age:number
}

interface loginModel
{
  userName:string;
  password:string;
  rememberMe:boolean;
}
