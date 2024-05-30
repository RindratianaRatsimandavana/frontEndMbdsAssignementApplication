import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumissionAssignementComponent } from './soumission-assignement.component';

describe('SoumissionAssignementComponent', () => {
  let component: SoumissionAssignementComponent;
  let fixture: ComponentFixture<SoumissionAssignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoumissionAssignementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoumissionAssignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
