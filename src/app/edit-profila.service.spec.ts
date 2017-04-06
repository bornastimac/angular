/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditProfilaService } from './edit-profila.service';

describe('EditProfilaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditProfilaService]
    });
  });

  it('should ...', inject([EditProfilaService], (service: EditProfilaService) => {
    expect(service).toBeTruthy();
  }));
});
