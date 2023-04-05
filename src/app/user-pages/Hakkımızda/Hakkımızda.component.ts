import { UserList } from './../Models/userList';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, take, takeWhile, timer , switchMap} from 'rxjs';
import { User } from '../Models/user';
import { JsonPlaceHolderService } from '../services/jsonPlaceHolder.service';



@Component({
  selector: 'app-Hakkımızda',
  templateUrl: './Hakkımızda.component.html',
  styleUrls: ['./Hakkımızda.component.css']
})
export class HakkımızdaComponent implements OnInit {

  user:User | undefined;

  getAllList:UserList[]=[];

  isLoadingShow:boolean=true;

  constructor(private jsonService:JsonPlaceHolderService) {
   }

  ngOnInit() {

    this.jsonService.getData().subscribe(x=>{
      this.user=x;
    });

    timer(3000).pipe(
      switchMap(() => this.jsonService.getDataList(1,20))
    ).subscribe(y => {
      this.getAllList = y;
      this.isLoadingShow = false;
    });

    this.jsonService.getListById(200).subscribe({
      next:(x)=>this.user=x,
      error:(e:Error)=>console.warn(`Hata : ${e.message}`)
    });

  }

}
