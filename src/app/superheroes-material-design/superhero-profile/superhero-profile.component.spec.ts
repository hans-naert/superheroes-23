import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroProfileComponent } from './superhero-profile.component';

describe('SuperheroProfileComponent', () => {
  let component: SuperheroProfileComponent;
  let fixture: ComponentFixture<SuperheroProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroProfileComponent]
    });
    fixture = TestBed.createComponent(SuperheroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
