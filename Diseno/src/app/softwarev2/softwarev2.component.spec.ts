import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Softwarev2Component } from './softwarev2.component';

describe('Softwarev2Component', () => {
  let component: Softwarev2Component;
  let fixture: ComponentFixture<Softwarev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Softwarev2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Softwarev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
