import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderYi } from './header-yi';

describe('HeaderYi', () => {
  let component: HeaderYi;
  let fixture: ComponentFixture<HeaderYi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderYi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderYi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
