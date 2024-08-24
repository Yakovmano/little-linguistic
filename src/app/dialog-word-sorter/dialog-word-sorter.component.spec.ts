import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWordSorterComponent } from './dialog-word-sorter.component';

describe('DialogWordSorterComponent', () => {
  let component: DialogWordSorterComponent;
  let fixture: ComponentFixture<DialogWordSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogWordSorterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogWordSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
