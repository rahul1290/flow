import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryIdeaComponent } from './story-idea.component';

describe('StoryIdeaComponent', () => {
  let component: StoryIdeaComponent;
  let fixture: ComponentFixture<StoryIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
