/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PretragaService } from './pretraga.service';

describe('PretragaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PretragaService]
    });
  });

  it('should ...', inject([PretragaService], (service: PretragaService) => {
    expect(service).toBeTruthy();
  }));
});
