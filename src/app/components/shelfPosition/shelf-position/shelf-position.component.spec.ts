import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfPositionComponent } from './shelf-position.component';

describe('ShelfPositionComponent', () => {
  let component: ShelfPositionComponent;
  let fixture: ComponentFixture<ShelfPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
