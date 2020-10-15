import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoyIdeaReportComponent } from './stoy-idea-report.component';

describe('StoyIdeaReportComponent', () => {
  let component: StoyIdeaReportComponent;
  let fixture: ComponentFixture<StoyIdeaReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoyIdeaReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoyIdeaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
