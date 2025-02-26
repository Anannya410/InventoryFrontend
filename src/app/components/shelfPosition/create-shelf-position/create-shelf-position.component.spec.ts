import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShelfPositionComponent } from './create-shelf-position.component';

describe('CreateShelfPositionComponent', () => {
  let component: CreateShelfPositionComponent;
  let fixture: ComponentFixture<CreateShelfPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateShelfPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateShelfPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
