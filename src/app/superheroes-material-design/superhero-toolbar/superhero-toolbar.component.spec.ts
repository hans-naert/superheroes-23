import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroToolbarComponent } from './superhero-toolbar.component';

describe('SuperheroToolbarComponent', () => {
  let component: SuperheroToolbarComponent;
  let fixture: ComponentFixture<SuperheroToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroToolbarComponent]
    });
    fixture = TestBed.createComponent(SuperheroToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
