import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Softwarev3Component } from './softwarev3.component';

describe('Softwarev3Component', () => {
  let component: Softwarev3Component;
  let fixture: ComponentFixture<Softwarev3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Softwarev3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Softwarev3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
