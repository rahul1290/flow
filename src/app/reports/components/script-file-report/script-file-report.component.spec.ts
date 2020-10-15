import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptFileReportComponent } from './script-file-report.component';

describe('ScriptFileReportComponent', () => {
  let component: ScriptFileReportComponent;
  let fixture: ComponentFixture<ScriptFileReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptFileReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptFileReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
