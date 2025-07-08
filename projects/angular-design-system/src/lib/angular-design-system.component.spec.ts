import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDesignSystemComponent } from './angular-design-system.component';

describe('AngularDesignSystemComponent', () => {
  let component: AngularDesignSystemComponent;
  let fixture: ComponentFixture<AngularDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDesignSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
