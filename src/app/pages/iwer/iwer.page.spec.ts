import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IwerPage } from './iwer.page';

describe('IwerPage', () => {
  let component: IwerPage;
  let fixture: ComponentFixture<IwerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IwerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
