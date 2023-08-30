import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaConfirmadaPage } from './tela-confirmada.page';

describe('TelaConfirmadaPage', () => {
  let component: TelaConfirmadaPage;
  let fixture: ComponentFixture<TelaConfirmadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelaConfirmadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
