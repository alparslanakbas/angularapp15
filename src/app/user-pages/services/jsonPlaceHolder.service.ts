import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { UserList } from '../Models/userList';
import { catchError, pipe, mergeMap, take, skip, from, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  user:User | undefined;

  getAllList:UserList[]=[];

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<User>('https://jsonplaceholder.typicode.com/todos/1');
  }

  getDataList(page:number,pageSize:number){
    return this.http.get<UserList[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(mergeMap(x=>from(x)),skip(((page-1)*pageSize)),take(pageSize),toArray());
  }

  getListById(id:number){
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
      catchError(error => {
        throw new Error("Data Bulunamadı")
      })
    );
  }
}
