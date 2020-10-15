import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryIdeaDashboardComponent } from './story-idea-dashboard.component';

describe('StoryIdeaDashboardComponent', () => {
  let component: StoryIdeaDashboardComponent;
  let fixture: ComponentFixture<StoryIdeaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryIdeaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryIdeaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
