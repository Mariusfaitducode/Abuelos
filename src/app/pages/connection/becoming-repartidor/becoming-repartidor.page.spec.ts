import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BecomingRepartidorPage } from './becoming-repartidor.page';

describe('BecomingRepartidorPage', () => {
  let component: BecomingRepartidorPage;
  let fixture: ComponentFixture<BecomingRepartidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BecomingRepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
