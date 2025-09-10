import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterYi } from './footer-yi';

describe('FooterYi', () => {
  let component: FooterYi;
  let fixture: ComponentFixture<FooterYi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterYi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterYi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
