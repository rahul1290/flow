import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptFileDashboardComponent } from './script-file-dashboard.component';

describe('ScriptFileDashboardComponent', () => {
  let component: ScriptFileDashboardComponent;
  let fixture: ComponentFixture<ScriptFileDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptFileDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptFileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
