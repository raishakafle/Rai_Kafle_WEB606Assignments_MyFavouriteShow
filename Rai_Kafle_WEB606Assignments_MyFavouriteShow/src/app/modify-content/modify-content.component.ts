import { Component } from '@angular/core';
import { ContentService } from '../services/content.service'; // Import your ContentService
import { MessagesService } from '../services/messages.service'; // Import your MessageService
import { Content } from '../helper-files/content-interface'; // Import your Content interface

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {
  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';

  constructor(
    private contentService: ContentService,
    private messageService: MessagesService
  ) {}

  addContent(): void {
    const newContent: Content = {
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL || undefined, // Optional field, set to undefined if empty
      type: this.type || undefined, // Optional field, set to undefined if empty
      tags: this.tags ? this.tags.split(',').map(tag => tag.trim()) : undefined, // Optional field, convert comma-separated tags to an array
    };

    this.contentService.addContent(newContent).subscribe((addedContent) => {
      // Handle the response here (update message service and content list)
      if (addedContent) {
        this.messageService.addMessage('Content added successfully!'); // Use the message service to display success message
        this.clearFields();
      } else {
        this.messageService.addMessage('Failed to add content.'); // Use the message service to display failure message
      }
    });
  }

  clearFields(): void {
    this.title = '';
    this.description = '';
    this.creator = '';
    this.imgURL = '';
    this.type = '';
    this.tags = '';
  }
}