/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ÜyeListesiComponent } from './ÜyeListesi.component';

describe('ÜyeListesiComponent', () => {
  let component: ÜyeListesiComponent;
  let fixture: ComponentFixture<ÜyeListesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ÜyeListesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ÜyeListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
