import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {

  count:number=1;
  constructor() { }

  ngOnInit() {
  }

  numberCountUp():void{
    this.count++;
    console.log(this.count);
  }

  numberCountDown():void{
    this.count--;
  }

}
