/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DenemeComponent } from './deneme.component';

describe('DenemeComponent', () => {
  let component: DenemeComponent;
  let fixture: ComponentFixture<DenemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
