import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBrandsComponent } from './country-brands.component';

describe('CountryBrandsComponent', () => {
  let component: CountryBrandsComponent;
  let fixture: ComponentFixture<CountryBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
