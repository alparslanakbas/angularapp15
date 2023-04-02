/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HakkımızdaComponent } from './Hakkımızda.component';

describe('HakkımızdaComponent', () => {
  let component: HakkımızdaComponent;
  let fixture: ComponentFixture<HakkımızdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HakkımızdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HakkımızdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
