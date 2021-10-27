import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopExamComponent } from './top-exam.component';

describe('TopExamComponent', () => {
  let component: TopExamComponent;
  let fixture: ComponentFixture<TopExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
