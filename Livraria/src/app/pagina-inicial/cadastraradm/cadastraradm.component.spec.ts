import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraradmComponent } from './cadastraradm.component';

describe('CadastraradmComponent', () => {
  let component: CadastraradmComponent;
  let fixture: ComponentFixture<CadastraradmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraradmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
