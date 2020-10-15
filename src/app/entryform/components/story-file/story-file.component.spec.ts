import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFileComponent } from './story-file.component';

describe('StoryFileComponent', () => {
  let component: StoryFileComponent;
  let fixture: ComponentFixture<StoryFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
