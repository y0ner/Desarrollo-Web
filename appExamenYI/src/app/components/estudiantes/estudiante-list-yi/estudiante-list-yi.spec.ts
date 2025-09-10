import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteListYi } from './estudiante-list-yi';

describe('EstudianteListYi', () => {
  let component: EstudianteListYi;
  let fixture: ComponentFixture<EstudianteListYi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudianteListYi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudianteListYi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
