/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrikazProfilaService } from './prikaz-profila.service';

describe('PrikazProfilaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrikazProfilaService]
    });
  });

  it('should ...', inject([PrikazProfilaService], (service: PrikazProfilaService) => {
    expect(service).toBeTruthy();
  }));
});
