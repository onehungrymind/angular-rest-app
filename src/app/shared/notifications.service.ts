import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/skip';

export interface Notification {
  title?: string;
  body: string;
}

@Injectable()
export class NotificationsService {
  private subject = new Subject();
  notifications$ = this.subject.asObservable();

  notification$: FirebaseObjectObservable<Notification>;

  constructor(db: AngularFireDatabase) {
    this.notification$ = db.object('/notification');
    this.notification$
      .skip(1)
      .subscribe(notification => this.subject.next(notification));
  }

  emit(notification: Notification) {
    this.notification$.set(notification);
  }
}
