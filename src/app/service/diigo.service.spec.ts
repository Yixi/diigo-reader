import { TestBed, inject } from '@angular/core/testing';

import { DiigoService } from './diigo.service';

describe('DiigoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiigoService]
    });
  });

  it('should be created', inject([DiigoService], (service: DiigoService) => {
    expect(service).toBeTruthy();
  }));
});
