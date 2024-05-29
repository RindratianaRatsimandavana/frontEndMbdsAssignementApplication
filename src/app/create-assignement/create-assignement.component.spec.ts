import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssignementComponent } from './create-assignement.component';

describe('CreateAssignementComponent', () => {
  let component: CreateAssignementComponent;
  let fixture: ComponentFixture<CreateAssignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAssignementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAssignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
