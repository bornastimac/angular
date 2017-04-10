/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PredajaOglasaService } from './predaja-oglasa.service';

describe('PredajaOglasaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredajaOglasaService]
    });
  });

  it('should ...', inject([PredajaOglasaService], (service: PredajaOglasaService) => {
    expect(service).toBeTruthy();
  }));
});
