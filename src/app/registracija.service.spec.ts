/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistracijaService } from './registracija.service';

describe('RegistracijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistracijaService]
    });
  });

  it('should ...', inject([RegistracijaService], (service: RegistracijaService) => {
    expect(service).toBeTruthy();
  }));
});
