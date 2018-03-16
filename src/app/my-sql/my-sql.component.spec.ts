import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySqlComponent } from './my-sql.component';

describe('MySqlComponent', () => {
  let component: MySqlComponent;
  let fixture: ComponentFixture<MySqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
