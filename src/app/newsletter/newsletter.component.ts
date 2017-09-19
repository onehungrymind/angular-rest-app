import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.subscriber = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  subscribe({ value, valid }: { value: Subscriber, valid: boolean }) {
    console.log(value, valid);
    this.reset();
  }

  reset() {
    this.subscriber.reset({
      name: '',
      email: ''
    });
  }
}
