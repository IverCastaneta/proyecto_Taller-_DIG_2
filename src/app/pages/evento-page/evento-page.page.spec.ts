import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoPagePage } from './evento-page.page';

describe('EventoPagePage', () => {
  let component: EventoPagePage;
  let fixture: ComponentFixture<EventoPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
