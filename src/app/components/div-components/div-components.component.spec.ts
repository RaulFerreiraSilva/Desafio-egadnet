import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivComponentsComponent } from './div-components.component';

describe('DivComponentsComponent', () => {
  let component: DivComponentsComponent;
  let fixture: ComponentFixture<DivComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
