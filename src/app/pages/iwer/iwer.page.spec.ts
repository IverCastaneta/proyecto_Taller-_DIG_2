import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IWERPage } from './iwer.page';

describe('IWERPage', () => {
  let component: IWERPage;
  let fixture: ComponentFixture<IWERPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IWERPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
