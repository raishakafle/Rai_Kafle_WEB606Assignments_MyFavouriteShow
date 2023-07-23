

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: string[] = [];
  private messagesSubject: Subject<string[]> = new Subject<string[]>();

  constructor() {}

  addMessage(message: string): void {
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }

  getMessages(): Observable<string[]> {
    return this.messagesSubject.asObservable();
  }
}