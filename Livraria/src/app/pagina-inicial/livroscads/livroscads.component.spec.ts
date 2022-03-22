import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroscadsComponent } from './livroscads.component';

describe('LivroscadsComponent', () => {
  let component: LivroscadsComponent;
  let fixture: ComponentFixture<LivroscadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroscadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroscadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
