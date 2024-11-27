import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewEventoPage } from './view-evento.page';

describe('ViewEventoPage', () => {
  let component: ViewEventoPage;
  let fixture: ComponentFixture<ViewEventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
