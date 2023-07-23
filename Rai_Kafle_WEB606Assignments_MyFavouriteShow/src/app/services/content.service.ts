import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Content } from '../helper-files/content-interface'; // Import your Content interface
import { MessagesService } from './messages.service'; // Import your MessageService

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private simulatedServer: Content[] = [];
  private currentId: number = 0;

  constructor(private messageService: MessagesService) {
    // Simulate initial data in the server array
    this.simulatedServer.push(
      { id: this.currentId++, title: 'Sample Content 1', description: 'This is the first sample content', creator: 'John Doe' },
      { id: this.currentId++, title: 'Sample Content 2', description: 'This is the second sample content', creator: 'Jane Smith' }
    );
  }

  // Simulated server request to add content
  addContent(content: Content): Observable<Content> {
    content.id = this.currentId++;
    this.simulatedServer.push(content);
    return of(content).pipe(delay(1000)); // Simulate server delay with 1 second
  }

  // Method to display success message
  private showSuccessMessage(message: string) {
    this.messageService.addMessage(message);
  }

  // Method to display failure message
  private showFailureMessage(message: string) {
    this.messageService.addMessage(message);
  }

  // Additional methods for handling content retrieval, update, and deletion can be added here

}