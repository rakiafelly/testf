import { TestBed } from '@angular/core/testing';

import { ListLivreService } from './list-livre.service';

describe('ListLivreService', () => {
  let service: ListLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
