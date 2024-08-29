import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorddetailComponent } from './worddetail.component';

describe('WorddetailComponent', () => {
  let component: WorddetailComponent;
  let fixture: ComponentFixture<WorddetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorddetailComponent]
    });
    fixture = TestBed.createComponent(WorddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
