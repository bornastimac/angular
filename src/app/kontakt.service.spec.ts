/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KontaktService } from './kontakt.service';

describe('KontaktService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KontaktService]
    });
  });

  it('should ...', inject([KontaktService], (service: KontaktService) => {
    expect(service).toBeTruthy();
  }));
});
