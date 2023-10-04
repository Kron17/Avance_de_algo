import { TestBed } from '@angular/core/testing';

import { UsuariosRandomService } from './usuarios-random.service';

describe('UsuariosRandomService', () => {
  let service: UsuariosRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
