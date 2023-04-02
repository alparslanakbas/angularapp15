/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { İletişimComponent } from './İletişim.component';

describe('İletişimComponent', () => {
  let component: İletişimComponent;
  let fixture: ComponentFixture<İletişimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ İletişimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(İletişimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
