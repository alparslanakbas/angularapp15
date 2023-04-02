import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, mergeMap, of, takeWhile } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-Anasayfa',
  templateUrl: './Anasayfa.component.html',
  styleUrls: ['./Anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  public intervalValue:number | undefined;

  constructor(private hp:HelperService) { }

  ngOnInit() {
    // this.hp.observable.subscribe({
    //   next(data){console.log(data)},
    //   error(err) {console.log(err)},
    //   complete() {console.log("Data Yayınlama Sona Erdi.")},
    // })

    let values = interval(10); // Eğer yayınlanacak datalar süre aralıklı olması gerekiyor ise timer kullanmamıza gerek kalmadan interval ile gerçekleştirebiliriz.
    values.pipe(takeWhile(val => val <= 100000)).subscribe(val => this.intervalValue=val) // val değişkeni 100000 e eşit olana kadar yazdır.
    //

    var stringArray=of("a","b","c");
    var numberArray=of(1,2,3);

    stringArray.pipe(mergeMap(x=>numberArray.pipe(map(y=> x+y)))).subscribe(x=>{
      console.log(x);
    })
  }

}
