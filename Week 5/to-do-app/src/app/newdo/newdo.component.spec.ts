import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdoComponent } from './newdo.component';

describe('NewdoComponent', () => {
  let component: NewdoComponent;
  let fixture: ComponentFixture<NewdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
