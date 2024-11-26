import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorPage } from './por.page';

describe('PorPage', () => {
  let component: PorPage;
  let fixture: ComponentFixture<PorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
