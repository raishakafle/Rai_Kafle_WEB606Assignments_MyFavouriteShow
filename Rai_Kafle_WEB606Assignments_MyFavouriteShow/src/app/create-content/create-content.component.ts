import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() onContentAdded: EventEmitter<Content> = new EventEmitter<Content>();
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };
  errorMessage: string = '';

  submitContent(): void {
    if (this.validateFields()) {
      this.sendContent()
        .then(() => {
          console.log('Content added successfully:', this.newContent.title);
          this.clearFields();
          this.errorMessage = '';
        })
        .catch(() => {
          this.errorMessage = 'Failed to add content';
        });
    } else {
      this.errorMessage = 'Please fill in all required fields';
    }
  }

  sendContent(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      //  a delay of 1 second
      setTimeout(() => {
        if (this.validateFields()) {
          // how to emit to contentList


          this.onContentAdded.emit(this.cloneContent(this.newContent));
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }

  cloneContent(content: Content): Content {
   
    return JSON.parse(JSON.stringify(content));
  }

  clearFields(): void {
    this.newContent = {
      id: 0,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    };
  }

  validateFields(): boolean {
    
    console.log(this.newContent.id);
    console.log(this.newContent.title);
    console.log(this.newContent.description);
    console.log(this.newContent.creator);
    return (
      this.newContent.id != null &&
      this.newContent.title.trim() !== '' &&
      this.newContent.description.trim() !== '' &&
      this.newContent.creator.trim() !== ''
    );
  }
}