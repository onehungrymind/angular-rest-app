import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdCardModule, MdButtonModule, BrowserAnimationsModule],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have a title', () => {
    const title = de.query(By.css('md-card-title'))
    expect(title.nativeElement.innerText).toBeTruthy();
  });

  it('should have a sub-title', () => {
    const subtitle = de.query(By.css('md-card-subtitle'))
    expect(subtitle.nativeElement.innerText).toBeTruthy();
  });

  it('should have an image', () => {
    const img = de.query(By.css('img'));
    expect(img.nativeElement).toBeDefined();
  });

  it('should have content', () => {
    const content = de.query(By.css('md-card-content p'))
    expect(content.nativeElement.innerText).toBeTruthy();
  });

  it('should have two action buttons', () => {
    const actions = de.queryAll(By.css('md-card-actions button'))
    expect(actions.length).toBe(2);
  });
});
