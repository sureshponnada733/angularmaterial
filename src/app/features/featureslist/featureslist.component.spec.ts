import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureslistComponent } from './featureslist.component';

describe('FeatureslistComponent', () => {
  let component: FeatureslistComponent;
  let fixture: ComponentFixture<FeatureslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
