import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../shared/notifications.service';

interface Subscriber {
  name: string;
  email: string;
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  subscriber: FormGroup;

  constructor(private fb: FormBuilder,
              private ns: NotificationsService) { }

  ngOnInit() {
    this.subscriber = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  subscribe({ value, valid }: { value: Subscriber, valid: boolean }) {
    this.ns.emit(`${value.name} just subscribed!`);
    this.reset();
  }

  reset() {
    this.subscriber.reset({
      name: '',
      email: ''
    });
  }
}
