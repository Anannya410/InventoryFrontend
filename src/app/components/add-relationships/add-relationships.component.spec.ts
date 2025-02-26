import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelationshipsComponent } from './add-relationships.component';

describe('AddRelationshipsComponent', () => {
  let component: AddRelationshipsComponent;
  let fixture: ComponentFixture<AddRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRelationshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
