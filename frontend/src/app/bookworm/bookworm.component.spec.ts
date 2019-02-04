import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookwormComponent } from './bookworm.component';

describe('BookwormComponent', () => {
  let component: BookwormComponent;
  let fixture: ComponentFixture<BookwormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookwormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookwormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
