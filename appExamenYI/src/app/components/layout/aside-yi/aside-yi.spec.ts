import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideYi } from './aside-yi';

describe('AsideYi', () => {
  let component: AsideYi;
  let fixture: ComponentFixture<AsideYi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideYi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideYi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
