/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PredajaOglasaComponent } from './predaja-oglasa.component';

describe('PredajaOglasaComponent', () => {
  let component: PredajaOglasaComponent;
  let fixture: ComponentFixture<PredajaOglasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredajaOglasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredajaOglasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
