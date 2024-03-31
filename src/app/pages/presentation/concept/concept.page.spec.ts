import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConceptPage } from './concept.page';

describe('ConceptPage', () => {
  let component: ConceptPage;
  let fixture: ComponentFixture<ConceptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
