import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterComponent } from './newsletter.component';
import { AppMaterialModule } from '../app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, BrowserAnimationsModule, ReactiveFormsModule],
      declarations: [ NewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have form with `email` and `name` controls', () => {
    expect(component.subscriber.controls.email).toBeDefined();
    expect(component.subscriber.controls.name).toBeDefined();
  });

  it('should have invalid controls by default', () => {
    expect(component.subscriber.controls.email.invalid).toBeTruthy();
    expect(component.subscriber.controls.name.invalid).toBeTruthy();
  });

  it('should have invalid controls because fields are required', () => {
    const emailErrors = component.subscriber.controls.email.errors || {};
    const nameErrors = component.subscriber.controls.name.errors || {};
    expect(emailErrors.required).toBeTruthy();
    expect(nameErrors.required).toBeTruthy();
  });

  describe('#subscribe', () => {
    beforeEach(() => {
      component.subscriber.controls.name.setValue('John Jones');
      component.subscriber.controls.email.setValue('test@domain.com');
    });

    it('should log the form value and validity', () => {
      spyOn(console, 'log');

      const expectedValue = {name: 'John Jones', email: 'test@domain.com'};
      const expectedValidity = true;

      component.subscribe(component.subscriber);
      expect(console.log).toHaveBeenCalledWith(expectedValue, expectedValidity);
    });

    it('should reset the form', () => {
      spyOn(component, 'reset').and.callThrough();
      component.subscribe(component.subscriber);
      expect(component.reset).toHaveBeenCalled();
    });
  });

  it('#reset should reset form controls', () => {
    component.subscriber.controls.name.setValue('John Jones');
    component.subscriber.controls.email.setValue('test@domain.com');

    component.reset();

    expect(component.subscriber.controls.name.value).toBe('');
    expect(component.subscriber.controls.email.value).toBe('');
  });
});
