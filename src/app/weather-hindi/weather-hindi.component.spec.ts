import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHindiComponent } from './weather-hindi.component';

describe('WeatherHindiComponent', () => {
  let component: WeatherHindiComponent;
  let fixture: ComponentFixture<WeatherHindiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHindiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
