
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  constructor(private messagesService: MessagesService) {}

  getContentArray(): Observable<Content[]> {
    this.messagesService.addMessage('Content array loaded!');
    return of(contentArray);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const contentItem = contentArray.find(item => item.id === id);
    if (contentItem) {
      this.messagesService.addMessage(`Content Item at id: ${id}`);
    }
    return of(contentItem);
  }
}