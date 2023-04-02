/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ÜrünlerComponent } from './Ürünler.component';

describe('ÜrünlerComponent', () => {
  let component: ÜrünlerComponent;
  let fixture: ComponentFixture<ÜrünlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ÜrünlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ÜrünlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
