import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteFormYi } from './estudiante-form-yi';

describe('EstudianteFormYi', () => {
  let component: EstudianteFormYi;
  let fixture: ComponentFixture<EstudianteFormYi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudianteFormYi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudianteFormYi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
