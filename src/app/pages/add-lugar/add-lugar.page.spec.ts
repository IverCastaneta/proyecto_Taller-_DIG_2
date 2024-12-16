import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLugarPage } from './add-lugar.page';

describe('AddLugarPage', () => {
  let component: AddLugarPage;
  let fixture: ComponentFixture<AddLugarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
