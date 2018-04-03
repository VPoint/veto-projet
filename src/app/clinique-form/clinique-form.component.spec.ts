import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniqueFormComponent } from './clinique-form.component';

describe('CliniqueFormComponent', () => {
  let component: CliniqueFormComponent;
  let fixture: ComponentFixture<CliniqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliniqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
