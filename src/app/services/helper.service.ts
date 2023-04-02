import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  observable!: Observable<string>

constructor() {

  let observable= new Observable<string>(data=>{
    data.next("alparslan");
    data.next("akbaş");
    data.complete();
  });

  observable.subscribe({next(data){console.log(data)},
  error(err){console.log(err)},
  complete(){console.log("Data Yayınlama Bitti")}
});

}

allTextUpper(text:string)
{
  return text.toUpperCase();
}

}
