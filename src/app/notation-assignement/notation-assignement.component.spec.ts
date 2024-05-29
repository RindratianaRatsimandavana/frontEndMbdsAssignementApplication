import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotationAssignementComponent } from './notation-assignement.component';

describe('NotationAssignementComponent', () => {
  let component: NotationAssignementComponent;
  let fixture: ComponentFixture<NotationAssignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotationAssignementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotationAssignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
