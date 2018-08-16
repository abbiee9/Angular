import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbuJaanComponent } from './abbu-jaan.component';

describe('AbbuJaanComponent', () => {
  let component: AbbuJaanComponent;
  let fixture: ComponentFixture<AbbuJaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbuJaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbuJaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
