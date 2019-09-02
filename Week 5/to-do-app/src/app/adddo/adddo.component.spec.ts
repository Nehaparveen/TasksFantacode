import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddoComponent } from './adddo.component';

describe('AdddoComponent', () => {
  let component: AdddoComponent;
  let fixture: ComponentFixture<AdddoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
