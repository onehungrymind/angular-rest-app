import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterComponent } from './newsletter.component';
import { AppMaterialModule } from '../app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationsService } from '../shared/notifications.service';

class NotificationsServiceStub {}

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, BrowserAnimationsModule, ReactiveFormsModule],
      declarations: [ NewsletterComponent ],
      providers: [
        {provide: NotificationsService, useClass: NotificationsServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
